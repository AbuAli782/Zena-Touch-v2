/**
 * Performance Optimization Module
 * Implements caching, lazy loading, and HTTP reduction strategies
 */

class PerformanceOptimizer {
    constructor() {
        this.cacheVersion = 'v1';
        this.cacheName = `zena-touch-${this.cacheVersion}`;
    }

    /**
     * Initialize performance optimizations
     */
    init() {
        // Only run optimizations on HTTP/HTTPS
        if (this.isSecureContext()) {
            this.setupServiceWorker();
            this.setupResourceHints();
            this.optimizeImages();
            this.setupCaching();
        }
    }

    /**
     * Check if running on secure context (HTTP/HTTPS)
     */
    isSecureContext() {
        return window.location.protocol === 'http:' || window.location.protocol === 'https:';
    }

    /**
     * Setup Service Worker for offline support and caching
     */
    setupServiceWorker() {
        if ('serviceWorker' in navigator && this.isSecureContext()) {
            navigator.serviceWorker.register('sw.js').catch(err => {
                console.log('Service Worker registration skipped (file:// protocol)');
            });
        }
    }

    /**
     * Setup resource hints for performance
     */
    setupResourceHints() {
        const hints = [
            {
                rel: 'dns-prefetch',
                href: '//cdn.jsdelivr.net'
            },
            {
                rel: 'dns-prefetch',
                href: '//cdnjs.cloudflare.com'
            },
            {
                rel: 'preconnect',
                href: '//fonts.googleapis.com'
            },
            {
                rel: 'preconnect',
                href: '//fonts.gstatic.com',
                crossorigin: true
            }
        ];

        hints.forEach(hint => {
            const link = document.createElement('link');
            link.rel = hint.rel;
            link.href = hint.href;
            if (hint.crossorigin) link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });
    }

    /**
     * Optimize images with modern formats
     */
    optimizeImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        images.forEach(img => {
            // Create picture element for modern format support
            const picture = document.createElement('picture');
            
            // WebP source
            const webpSource = document.createElement('source');
            webpSource.srcSet = img.dataset.src.replace(/\.(jpg|png)$/i, '.webp');
            webpSource.type = 'image/webp';
            
            // Fallback source
            const jpgSource = document.createElement('source');
            jpgSource.srcSet = img.dataset.src;
            jpgSource.type = 'image/jpeg';
            
            picture.appendChild(webpSource);
            picture.appendChild(jpgSource);
            picture.appendChild(img);
            
            img.parentNode.replaceChild(picture, img);
        });
    }

    /**
     * Setup client-side caching
     */
    setupCaching() {
        // Only cache API responses on HTTP/HTTPS
        if (this.isSecureContext()) {
            this.cacheApiResponse('api/services', 3600000); // 1 hour
            this.cacheApiResponse('api/gallery', 86400000); // 24 hours
        }
    }

    /**
     * Cache API response with TTL
     */
    cacheApiResponse(endpoint, ttl) {
        // Skip caching on file:// protocol
        if (!this.isSecureContext()) {
            return;
        }

        const cacheKey = `cache_${endpoint}`;
        const timestamp = Date.now();
        
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const cacheData = {
                    data: data,
                    timestamp: timestamp,
                    ttl: ttl
                };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            })
            .catch(err => console.log('Cache error (skipped on file:// protocol):', err));
    }

    /**
     * Get cached data if available and not expired
     */
    getCachedData(endpoint) {
        const cacheKey = `cache_${endpoint}`;
        const cached = localStorage.getItem(cacheKey);
        
        if (cached) {
            const cacheData = JSON.parse(cached);
            const now = Date.now();
            
            if (now - cacheData.timestamp < cacheData.ttl) {
                return cacheData.data;
            } else {
                localStorage.removeItem(cacheKey);
            }
        }
        
        return null;
    }

    /**
     * Preload critical resources
     */
    preloadCriticalResources() {
        const criticalResources = [
            'styles.css',
            'services.css',
            'main.js',
            'services-loader.js'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = resource.endsWith('.css') ? 'style' : 'script';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    /**
     * Defer non-critical JavaScript
     */
    deferNonCriticalScripts() {
        const scripts = document.querySelectorAll('script[data-defer]');
        scripts.forEach(script => {
            script.defer = true;
        });
    }

    /**
     * Monitor performance metrics
     */
    monitorPerformance() {
        if ('PerformanceObserver' in window) {
            // Observe Largest Contentful Paint
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log('LCP:', entry.renderTime || entry.loadTime);
                }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });

            // Observe First Input Delay
            const fidObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log('FID:', entry.processingDuration);
                }
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
        }
    }

    /**
     * Enable compression for API responses
     */
    enableCompression() {
        // This is typically done on the server side
        // But we can add headers for fetch requests
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            if (args[1]) {
                args[1].headers = args[1].headers || {};
                args[1].headers['Accept-Encoding'] = 'gzip, deflate, br';
            }
            return originalFetch.apply(this, args);
        };
    }
}

// Initialize performance optimizer
document.addEventListener('DOMContentLoaded', () => {
    const optimizer = new PerformanceOptimizer();
    optimizer.init();
    optimizer.monitorPerformance();
});
