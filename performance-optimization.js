// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

/**
 * Performance Optimization Script
 * Handles image optimization, preloading, and caching
 */

// Preload critical images
function preloadCriticalImages() {
    const criticalImages = [
        'images/Decoration_Photos/IMG1.jpg',
        'images/Decoration_Photos/IMG2.jpg',
        'images/Electricity_Photos/IMG1.jpg',
        'images/Plumbing_Photos/IMG1.jpg'
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Optimize images with responsive srcset
function optimizeResponsiveImages() {
    const images = document.querySelectorAll('img[data-responsive]');
    
    images.forEach(img => {
        const baseSrc = img.getAttribute('data-responsive');
        if (baseSrc) {
            img.srcset = `
                ${baseSrc}?w=480 480w,
                ${baseSrc}?w=768 768w,
                ${baseSrc}?w=1024 1024w,
                ${baseSrc}?w=1440 1440w
            `;
            img.sizes = '(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 80vw';
        }
    });
}

// Enable native lazy loading with fallback
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load image
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    // Load srcset
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    
                    // Add loaded class
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Defer non-critical CSS
function deferNonCriticalCSS() {
    const links = document.querySelectorAll('link[rel="stylesheet"][data-defer]');
    links.forEach(link => {
        link.rel = 'preload';
        link.as = 'style';
        link.onload = function() {
            this.rel = 'stylesheet';
        };
    });
}

// Enable resource hints
function addResourceHints() {
    // DNS Prefetch
    const dnsPrefetchLinks = [
        'https://cdn.jsdelivr.net',
        'https://cdnjs.cloudflare.com',
        'https://fonts.googleapis.com'
    ];

    dnsPrefetchLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
    });

    // Preconnect
    const preconnectLinks = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
    ];

    preconnectLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
}

// Monitor performance metrics
function monitorPerformance() {
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('Performance Metrics:');
            console.log(`Page Load Time: ${pageLoadTime}ms`);
            console.log(`Connect Time: ${connectTime}ms`);
            console.log(`Render Time: ${renderTime}ms`);

            // Send to analytics if needed
            if (window.gtag) {
                gtag('event', 'page_load_time', {
                    'value': pageLoadTime
                });
            }
        });
    }
}

// Cache API responses - Optimized for GitHub Pages
function setupResponseCache() {
    if ('caches' in window) {
        caches.open('zenatoch-v1').then(cache => {
            // Cache only image assets to avoid 206 partial response issues
            const imagesToCache = [
                'images/Decoration_Photos/IMG1.jpg',
                'images/Decoration_Photos/IMG2.jpg',
                'images/Electricity_Photos/IMG1.jpg',
                'images/Plumbing_Photos/IMG1.jpg'
            ];

            imagesToCache.forEach(url => {
                cache.add(url).catch(err => {
                    console.log('Image cache error for ' + url + ':', err);
                });
            });
        }).catch(err => {
            console.log('Cache storage error:', err);
        });
    }
}

// Initialize all optimizations
document.addEventListener('DOMContentLoaded', () => {
    preloadCriticalImages();
    optimizeResponsiveImages();
    setupLazyLoading();
    deferNonCriticalCSS();
    addResourceHints();
    monitorPerformance();
    setupResponseCache();
});
