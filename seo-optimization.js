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
                description: 'زينة تاتش - خدمات زينة وديكور احترافية، كهرباء، وسباكة في الدمام والخبر والعزيزية والقطيف وسيهات والجبيل. جودة عالية وأسعار منافسة.',
                keywords: 'إضاءة خارجية الدمام، تركيب إضاءة حدائق، محلات زينة في الدمام، إضاءة واجهات منازل، إنارة حدائق بالطاقة الشمسية، تزيين إضاءة مناسبات، زينة منازل خارجية، إضاءة أعراس بالدمام، عقود إضاءة خارجية، أسعار إضاءة الحدائق، كهربائي منازل بالدمام، فني كهربائي في الدمام، كهربائي طوارئ الدمام، أفضل كهربائي في الدمام، صيانة كهرباء المنازل، تأسيس كهرباء منازل، شركة صيانة كهرباء بالدمام، تمديد كهرباء بالدمام، إصلاح أعطال الكهرباء، رقم كهربائي بالدمام، سباك في الدمام، أفضل سباك بالدمام، كشف تسربات المياه بالدمام، سباك ٢٤ ساعة الدمام، رقم سباك في الدمام، تسليك مجاري بالدمام، شركة سباكة بالدمام، تركيب أدوات صحية، إصلاح تسربات المياه، سباك ممتاز بالدمام'
            },
            'portfolio.html': {
                title: 'معرض الأعمال - زينة تاتش | Zeina Touch Portfolio',
                description: 'معرض أعمال زينة تاتش - اكتشف مشاريعنا الاحترافية في الزينة والديكور والكهرباء والسباكة بالدمام والخبر. صور وفيديوهات عالية الجودة.',
                keywords: 'معرض أعمال، ديكور، زينة، كهرباء، سباكة، مشاريع، أعمال احترافية، تركيب إضاءة سور المنزل، أفكار إضاءة حدائق، شركات تزيين المنازل، تأجير إضاءة حفلات، إضاءة مخفية لواجهات الفلل، كشافات الحدائق، تصميم إضاءة خارجية، إنارة مسابح، إضاءة أشجار خارجية، زينة رمضان'
            },
            'contact.html': {
                title: 'اتصل بنا - زينة تاتش | Zeina Touch Contact',
                description: 'اتصل بنا - زينة تاتش. تواصل معنا عبر الهاتف أو البريد الإلكتروني أو WhatsApp. نحن متاحون ٢٤/٧ لخدمتك في الدمام والخبر.',
                keywords: 'اتصل بنا، تواصل، معلومات التواصل، WhatsApp، هاتف، بريد إلكتروني، رقم كهربائي، رقم سباك، تواصل معنا، خدمة العملاء، الدمام، الخبر'
            },
            'service-detail.html': {
                title: 'تفاصيل الخدمات - زينة تاتش | Zeina Touch Services',
                description: 'تفاصيل الخدمات - زينة تاتش. اكتشف خدماتنا الاحترافية في الزينة والديكور والكهرباء والسباكة مع صور وفيديوهات توضيحية.',
                keywords: 'خدمات، زينة، ديكور، كهرباء، سباكة، تفاصيل الخدمة، كهربائي ممتاز، فني كهربائي قريب مني، إصلاح التماس كهربائي، تركيب ثريات، تغيير طبلون الكهرباء، تسليك كهرباء، مهندس كهربائي، فحص مشاكل انقطاع الكهرباء، تمديد نقاط كهرباء، تركيب أفياش ومفاتيح، صيانة لوحات التوزيع، كشف تسربات المياه بدون تكسير، إصلاح تسريب كرسي الحمام، تركيب سخانات مياه، تسليك مجاري المطبخ، معالجة رطوبة الجدران، تمديد شبكات مياه، تركيب فلاتر مياه، صيانة مضخات المياه'
            }
        };
    }

    /**
     * Update Meta Tags Dynamically
     */
    updateMetaTags() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const metadata = this.pageMetadata[currentPage];

        if (metadata) {
            // Update title
            document.title = metadata.title;
            
            // Update or create description meta tag
            let descMeta = document.querySelector('meta[name="description"]');
            if (descMeta) {
                descMeta.setAttribute('content', metadata.description);
            } else {
                descMeta = document.createElement('meta');
                descMeta.name = 'description';
                descMeta.content = metadata.description;
                document.head.appendChild(descMeta);
            }

            // Update or create keywords meta tag
            let keywordsMeta = document.querySelector('meta[name="keywords"]');
            if (keywordsMeta) {
                keywordsMeta.setAttribute('content', metadata.keywords);
            } else {
                keywordsMeta = document.createElement('meta');
                keywordsMeta.name = 'keywords';
                keywordsMeta.content = metadata.keywords;
                document.head.appendChild(keywordsMeta);
            }

            // Update Open Graph tags
            this.updateOpenGraphTags(metadata);
        }
    }

    /**
     * Update Open Graph Tags
     */
    updateOpenGraphTags(metadata) {
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', metadata.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', metadata.description);
        }
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
        this.updateMetaTags();
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
