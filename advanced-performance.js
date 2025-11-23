/**
 * Advanced Performance Optimization
 * Optimizes Core Web Vitals, TTFB, and overall page performance
 */

(function() {
    'use strict';

    // Performance Monitoring
    const performanceMetrics = {
        startTime: performance.now(),
        metrics: {}
    };

    // 1. Optimize Images with Lazy Loading
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
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

    // 2. Optimize Font Loading
    function optimizeFontLoading() {
        if ('fonts' in document) {
            document.fonts.ready.then(() => {
                document.documentElement.classList.add('fonts-loaded');
            });
        }
    }

    // 3. Preload Critical Resources
    function preloadCriticalResources() {
        const criticalResources = [
            { rel: 'preload', as: 'style', href: '/styles.css' },
            { rel: 'preload', as: 'script', href: '/main.js' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = resource.rel;
            link.as = resource.as;
            link.href = resource.href;
            document.head.appendChild(link);
        });
    }

    // 4. Optimize CSS Delivery
    function optimizeCSSDelivery() {
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        stylesheets.forEach(sheet => {
            if (!sheet.media || sheet.media === 'all') {
                sheet.media = 'print';
                sheet.onload = function() {
                    this.media = 'all';
                };
            }
        });
    }

    // 5. Defer Non-Critical JavaScript
    function deferNonCriticalScripts() {
        const scripts = document.querySelectorAll('script[data-defer]');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.src = script.src;
            newScript.async = true;
            document.body.appendChild(newScript);
            script.remove();
        });
    }

    // 6. Enable GZIP Compression (Server-side, but we can verify)
    function checkCompressionHeaders() {
        fetch(window.location.href, { method: 'HEAD' })
            .then(response => {
                const encoding = response.headers.get('content-encoding');
                console.log('Content Encoding:', encoding || 'Not compressed');
            })
            .catch(err => console.log('Compression check error:', err));
    }

    // 7. Optimize Core Web Vitals
    function monitorCoreWebVitals() {
        // LCP - Largest Contentful Paint
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    performanceMetrics.metrics.LCP = lastEntry.renderTime || lastEntry.loadTime;
                    console.log('LCP:', performanceMetrics.metrics.LCP);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.log('LCP monitoring not supported');
            }

            // CLS - Cumulative Layout Shift
            try {
                let clsValue = 0;
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                            performanceMetrics.metrics.CLS = clsValue;
                        }
                    }
                    console.log('CLS:', performanceMetrics.metrics.CLS);
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.log('CLS monitoring not supported');
            }

            // FID - First Input Delay (deprecated, but still useful)
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach(entry => {
                        performanceMetrics.metrics.FID = entry.processingDuration;
                        console.log('FID:', performanceMetrics.metrics.FID);
                    });
                });
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                console.log('FID monitoring not supported');
            }
        }
    }

    // 8. Optimize TTFB - Time To First Byte
    function optimizeTTFB() {
        if (window.performance && window.performance.timing) {
            const timing = window.performance.timing;
            const ttfb = timing.responseStart - timing.fetchStart;
            performanceMetrics.metrics.TTFB = ttfb;
            console.log('TTFB:', ttfb, 'ms');
        }
    }

    // 9. Remove Unused CSS (via critical CSS)
    function loadCriticalCSS() {
        const criticalCSS = `
            /* Critical CSS for above-the-fold content */
            body { font-family: 'Tajawal', sans-serif; }
            .navbar { position: fixed; top: 0; width: 100%; z-index: 1000; }
            .hero { min-height: 100vh; display: flex; align-items: center; }
            .container { max-width: 1440px; margin: 0 auto; padding: 0 20px; }
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
    }

    // 10. Optimize Third-Party Scripts
    function optimizeThirdPartyScripts() {
        // Google Analytics
        const gaScript = document.querySelector('script[src*="google-analytics"]');
        if (gaScript) {
            gaScript.async = true;
            gaScript.defer = true;
        }

        // Google Tag Manager
        const gtmScript = document.querySelector('script[src*="googletagmanager"]');
        if (gtmScript) {
            gtmScript.async = true;
        }
    }

    // 11. Enable Service Worker for Caching
    function enableServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('Service Worker registered:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        }
    }

    // 12. Optimize Resource Hints
    function addResourceHints() {
        const hints = [
            { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
            { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
            { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
            { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
            { rel: 'preconnect', href: '//fonts.googleapis.com' },
            { rel: 'preconnect', href: '//fonts.gstatic.com' }
        ];

        hints.forEach(hint => {
            const link = document.createElement('link');
            link.rel = hint.rel;
            link.href = hint.href;
            if (hint.rel === 'preconnect') {
                link.crossOrigin = 'anonymous';
            }
            document.head.appendChild(link);
        });
    }

    // 13. Report Performance Metrics
    function reportPerformanceMetrics() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                performanceMetrics.metrics.pageLoadTime = pageLoadTime;
                performanceMetrics.metrics.domContentLoaded = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                performanceMetrics.metrics.resourcesLoaded = perfData.loadEventEnd - perfData.responseEnd;

                console.log('Performance Metrics:', performanceMetrics.metrics);

                // Send to analytics if available
                if (window.gtag) {
                    window.gtag('event', 'page_load_metrics', {
                        'page_load_time': pageLoadTime,
                        'dom_content_loaded': performanceMetrics.metrics.domContentLoaded,
                        'resources_loaded': performanceMetrics.metrics.resourcesLoaded
                    });
                }
            }, 0);
        });
    }

    // 14. Optimize Memory Usage
    function optimizeMemoryUsage() {
        // Remove event listeners on page unload
        window.addEventListener('beforeunload', () => {
            // Clean up event listeners
            document.querySelectorAll('[data-listener]').forEach(el => {
                el.removeAttribute('data-listener');
            });
        });
    }

    // 15. Batch DOM Updates
    function batchDOMUpdates(callback) {
        if (window.requestIdleCallback) {
            requestIdleCallback(callback);
        } else {
            setTimeout(callback, 0);
        }
    }

    // Initialize all optimizations
    function init() {
        // Run on DOM Ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initLazyLoading();
                optimizeFontLoading();
                optimizeCSSDelivery();
                deferNonCriticalScripts();
                loadCriticalCSS();
                optimizeThirdPartyScripts();
                addResourceHints();
                enableServiceWorker();
                monitorCoreWebVitals();
                optimizeTTFB();
                reportPerformanceMetrics();
            });
        } else {
            initLazyLoading();
            optimizeFontLoading();
            optimizeCSSDelivery();
            deferNonCriticalScripts();
            loadCriticalCSS();
            optimizeThirdPartyScripts();
            addResourceHints();
            enableServiceWorker();
            monitorCoreWebVitals();
            optimizeTTFB();
            reportPerformanceMetrics();
        }

        // Check compression
        checkCompressionHeaders();
    }

    // Start initialization
    init();

    // Export metrics for external use
    window.performanceMetrics = performanceMetrics;
})();
