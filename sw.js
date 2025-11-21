/**
 * Service Worker
 * Handles caching, offline support, and performance optimization
 */

const CACHE_VERSION = 'v1';
const CACHE_NAME = `zena-touch-${CACHE_VERSION}`;

// Assets to cache on install
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/services.css',
    '/main.js',
    '/services-loader.js',
    '/performance.js',
    '/contact.css',
    '/portfolio.css',
    '/service-detail.css'
];

// Install event - cache assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE).catch(err => {
                console.log('Cache addAll error:', err);
            });
        })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Skip external requests
    if (url.origin !== location.origin) {
        return;
    }

    // Handle different request types
    if (request.destination === 'image') {
        event.respondWith(cacheImage(request));
    } else if (request.destination === 'style' || request.destination === 'script') {
        event.respondWith(cacheFirst(request));
    } else {
        event.respondWith(networkFirst(request));
    }
});

/**
 * Cache first strategy - use cache, fallback to network
 */
function cacheFirst(request) {
    return caches.match(request).then(response => {
        if (response) {
            return response;
        }
        return fetch(request).then(response => {
            // Only cache successful full responses
            if (response && response.status === 200) {
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, responseToCache).catch(err => {
                        console.log('Cache put error:', err);
                    });
                });
            }
            return response;
        }).catch(() => {
            return new Response('Offline - Resource not available', {
                status: 503,
                statusText: 'Service Unavailable'
            });
        });
    });
}

/**
 * Network first strategy - try network, fallback to cache
 */
function networkFirst(request) {
    return fetch(request).then(response => {
        // Only cache successful full responses (not partial 206 responses)
        if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
                cache.put(request, responseToCache).catch(err => {
                    console.log('Cache put error:', err);
                });
            });
        }
        return response;
    }).catch(() => {
        return caches.match(request).then(response => {
            if (response) {
                return response;
            }
            return new Response('Offline - Resource not available', {
                status: 503,
                statusText: 'Service Unavailable'
            });
        });
    });
}

/**
 * Cache images with size limit
 */
function cacheImage(request) {
    return caches.match(request).then(response => {
        if (response) {
            return response;
        }
        return fetch(request).then(response => {
            // Only cache successful full responses (status 200, not 206 partial)
            if (!response || response.status !== 200 || response.type === 'error') {
                return response;
            }

            // Clone the response
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
                cache.put(request, responseToCache).catch(err => {
                    console.log('Image cache error:', err);
                });
            });
            return response;
        }).catch(() => {
            // Return a placeholder image on error
            return new Response(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="#f0f0f0" width="400" height="300"/></svg>',
                {
                    headers: { 'Content-Type': 'image/svg+xml' }
                }
            );
        });
    });
}

/**
 * Background sync for form submissions
 */
self.addEventListener('sync', event => {
    if (event.tag === 'sync-forms') {
        event.waitUntil(syncForms());
    }
});

async function syncForms() {
    try {
        const db = await openIndexedDB();
        const forms = await getUnsentForms(db);
        
        for (const form of forms) {
            try {
                await fetch('/api/submit-form', {
                    method: 'POST',
                    body: JSON.stringify(form),
                    headers: { 'Content-Type': 'application/json' }
                });
                await deleteForm(db, form.id);
            } catch (err) {
                console.log('Form sync error:', err);
            }
        }
    } catch (err) {
        console.log('Sync error:', err);
    }
}

/**
 * Open IndexedDB for offline form storage
 */
function openIndexedDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('ZenaTouchDB', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('forms')) {
                db.createObjectStore('forms', { keyPath: 'id', autoIncrement: true });
            }
        };
    });
}

/**
 * Get unsent forms from IndexedDB
 */
function getUnsentForms(db) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['forms'], 'readonly');
        const store = transaction.objectStore('forms');
        const request = store.getAll();
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);
    });
}

/**
 * Delete form from IndexedDB
 */
function deleteForm(db, id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['forms'], 'readwrite');
        const store = transaction.objectStore('forms');
        const request = store.delete(id);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve();
    });
}
