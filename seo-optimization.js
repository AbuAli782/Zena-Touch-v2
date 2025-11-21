// ========================================
// SEO OPTIMIZATION SCRIPT
// ========================================

/**
 * Dynamic Meta Tags Management
 * Updates meta tags based on page content
 */
class SEOOptimizer {
    constructor() {
        this.pageMetadata = {
            'index.html': {
                title: 'زينة تاتش - خدمات زينة وديكور احترافية | Zeina Touch',
                description: 'زينة تاتش - خدمات زينة وديكور احترافية، كهرباء، وسباكة في الخبر والمملكة العربية السعودية. جودة عالية وأسعار منافسة. اطلب خدماتنا الآن!',
                keywords: 'زينة منازل، ديكور احترافي، خدمات كهرباء، سباكة، تصميم داخلي، الخبر، السعودية'
            },
            'portfolio.html': {
                title: 'معرض الأعمال - زينة تاتش | Zeina Touch Portfolio',
                description: 'معرض أعمال زينة تاتش - اكتشف مشاريعنا الاحترافية في الزينة والديكور والكهرباء والسباكة. صور وفيديوهات عالية الجودة لأعمالنا.',
                keywords: 'معرض أعمال، ديكور، زينة، كهرباء، سباكة، مشاريع، أعمال احترافية'
            },
            'contact.html': {
                title: 'اتصل بنا - زينة تاتش | Zeina Touch Contact',
                description: 'اتصل بنا - زينة تاتش. تواصل معنا عبر الهاتف أو البريد الإلكتروني أو WhatsApp. نحن هنا للإجابة على جميع استفساراتك.',
                keywords: 'اتصل بنا، تواصل، معلومات التواصل، WhatsApp، هاتف، بريد إلكتروني'
            },
            'service-detail.html': {
                title: 'تفاصيل الخدمات - زينة تاتش | Zeina Touch Services',
                description: 'تفاصيل الخدمات - زينة تاتش. اكتشف خدماتنا الاحترافية في الزينة والديكور والكهرباء والسباكة مع صور وفيديوهات توضيحية.',
                keywords: 'خدمات، زينة، ديكور، كهرباء، سباكة، تفاصيل الخدمة'
            }
        };
    }

    /**
     * Initialize Lazy Loading for Images and Iframes
     */
    initLazyLoading() {
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
            });

            // Observe all images with data-src
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });

            // Observe all iframes with data-src
            document.querySelectorAll('iframe[data-src]').forEach(iframe => {
                imageObserver.observe(iframe);
            });
        }
    }

    /**
     * Add Breadcrumb Schema to Pages
     */
    addBreadcrumbSchema() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const breadcrumbs = this.getBreadcrumbs(currentPage);
        
        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.name,
                "item": item.url
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    /**
     * Get Breadcrumbs for Current Page
     */
    getBreadcrumbs(page) {
        const breadcrumbs = [
            { name: 'الرئيسية', url: 'https://abuali782.github.io/Zena-Touch-v2/' }
        ];

        switch(page) {
            case 'portfolio.html':
                breadcrumbs.push({ name: 'معرض الأعمال', url: 'https://abuali782.github.io/Zena-Touch-v2/portfolio.html' });
                break;
            case 'contact.html':
                breadcrumbs.push({ name: 'اتصل بنا', url: 'https://abuali782.github.io/Zena-Touch-v2/contact.html' });
                break;
            case 'service-detail.html':
                breadcrumbs.push({ name: 'الخدمات', url: 'https://abuali782.github.io/Zena-Touch-v2/service-detail.html' });
                break;
        }

        return breadcrumbs;
    }

    /**
     * Optimize Images with WebP Support
     */
    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading="lazy" for native lazy loading
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }

            // Ensure alt text exists
            if (!img.hasAttribute('alt') || img.getAttribute('alt').trim() === '') {
                img.setAttribute('alt', 'صورة من زينة تاتش');
            }
        });
    }

    /**
     * Add Structured Data for Videos
     */
    addVideoSchema(videoUrl, videoTitle, videoDescription, thumbnailUrl) {
        const schema = {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": videoTitle,
            "description": videoDescription,
            "thumbnailUrl": thumbnailUrl,
            "uploadDate": new Date().toISOString(),
            "contentUrl": videoUrl
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    /**
     * Monitor Core Web Vitals
     */
    monitorCoreWebVitals() {
        // Largest Contentful Paint (LCP)
        if ('PerformanceObserver' in window) {
            try {
                const lcpObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
                });
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                console.log('LCP monitoring not supported');
            }

            // Cumulative Layout Shift (CLS)
            try {
                let clsValue = 0;
                let clsLogged = false;
                const clsObserver = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (!entry.hadRecentInput) {
                            clsValue += entry.value;
                            if (!clsLogged && clsValue > 0) {
                                console.log('CLS:', clsValue);
                                clsLogged = true;
                            }
                        }
                    }
                });
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch (e) {
                console.log('CLS monitoring not supported');
            }

            // First Input Delay (FID) / Interaction to Next Paint (INP)
            try {
                const fidObserver = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    if (entries.length > 0) {
                        const entry = entries[0];
                        console.log('FID/INP:', entry.processingDuration || 'N/A');
                    }
                });
                fidObserver.observe({ entryTypes: ['first-input', 'event'] });
            } catch (e) {
                console.log('FID/INP monitoring not supported');
            }
        }
    }

    /**
     * Preload Critical Resources
     */
    preloadCriticalResources() {
        const criticalResources = [
            { href: 'styles.css', as: 'style' },
            { href: 'main.js', as: 'script' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    }

    /**
     * Initialize All SEO Optimizations
     */
    init() {
        this.initLazyLoading();
        this.addBreadcrumbSchema();
        this.optimizeImages();
        this.monitorCoreWebVitals();
        this.preloadCriticalResources();
    }
}

// Initialize SEO Optimizer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const seoOptimizer = new SEOOptimizer();
    seoOptimizer.init();
});
