/**
 * Meta Tags Optimizer
 * Dynamically optimizes meta tags for better SEO
 */

class MetaTagsOptimizer {
    constructor() {
        this.pageConfigs = {
            'index.html': {
                title: 'زينة تاتش - خدمات زينة وديكور احترافية | Zeina Touch',
                description: 'زينة تاتش - خدمات زينة وديكور احترافية، كهرباء، وسباكة في الدمام والخبر والعزيزية والقطيف وسيهات والجبيل. جودة عالية وأسعار منافسة.',
                keywords: 'إضاءة خارجية الدمام، تركيب إضاءة حدائق، محلات زينة في الدمام، إضاءة واجهات منازل، إنارة حدائق بالطاقة الشمسية، تزيين إضاءة مناسبات، زينة منازل خارجية، إضاءة أعراس بالدمام، عقود إضاءة خارجية، أسعار إضاءة الحدائق، كهربائي منازل بالدمام، فني كهربائي في الدمام، كهربائي طوارئ الدمام، أفضل كهربائي في الدمام، صيانة كهرباء المنازل، تأسيس كهرباء منازل، شركة صيانة كهرباء بالدمام، تمديد كهرباء بالدمام، إصلاح أعطال الكهرباء، رقم كهربائي بالدمام، سباك في الدمام، أفضل سباك بالدمام، كشف تسربات المياه بالدمام، سباك ٢٤ ساعة الدمام، رقم سباك في الدمام، تسليك مجاري بالدمام، شركة سباكة بالدمام، تركيب أدوات صحية، إصلاح تسربات المياه، سباك ممتاز بالدمام',
                ogTitle: 'زينة تاتش - خدمات زينة وديكور احترافية',
                ogDescription: 'اكتشف خدمات الزينة والديكور والكهرباء والسباكة من زينة تاتش. جودة مضمونة وأسعار منافسة.',
                ogImage: 'https://abuali782.github.io/Zena-Touch-v2/images/Decoration_Photos/IMG1.jpg'
            },
            'portfolio.html': {
                title: 'معرض الأعمال - زينة تاتش | Zeina Touch Portfolio',
                description: 'معرض أعمال زينة تاتش - اكتشف مشاريعنا الاحترافية في الزينة والديكور والكهرباء والسباكة بالدمام والخبر. صور وفيديوهات عالية الجودة.',
                keywords: 'معرض أعمال، ديكور، زينة، كهرباء، سباكة، مشاريع، أعمال احترافية، تركيب إضاءة سور المنزل، أفكار إضاءة حدائق، شركات تزيين المنازل، تأجير إضاءة حفلات، إضاءة مخفية لواجهات الفلل، كشافات الحدائق، تصميم إضاءة خارجية، إنارة مسابح، إضاءة أشجار خارجية، زينة رمضان',
                ogTitle: 'معرض الأعمال - زينة تاتش',
                ogDescription: 'اكتشف مشاريعنا الاحترافية والمتنوعة في الزينة والديكور والكهرباء والسباكة.',
                ogImage: 'https://abuali782.github.io/Zena-Touch-v2/images/Decoration_Photos/IMG1.jpg'
            },
            'contact.html': {
                title: 'اتصل بنا - زينة تاتش | Zeina Touch Contact',
                description: 'اتصل بنا - زينة تاتش. تواصل معنا عبر الهاتف أو البريد الإلكتروني أو WhatsApp. نحن متاحون ٢٤/٧ لخدمتك في الدمام والخبر.',
                keywords: 'اتصل بنا، تواصل، معلومات التواصل، WhatsApp، هاتف، بريد إلكتروني، رقم كهربائي، رقم سباك، تواصل معنا، خدمة العملاء، الدمام، الخبر',
                ogTitle: 'اتصل بنا - زينة تاتش',
                ogDescription: 'تواصل معنا عبر الهاتف أو البريد الإلكتروني أو WhatsApp. نحن هنا لخدمتك.',
                ogImage: 'https://abuali782.github.io/Zena-Touch-v2/images/Decoration_Photos/IMG1.jpg'
            },
            'service-detail.html': {
                title: 'تفاصيل الخدمات - زينة تاتش | Zeina Touch Services',
                description: 'تفاصيل الخدمات - زينة تاتش. اكتشف خدماتنا الاحترافية في الزينة والديكور والكهرباء والسباكة مع صور وفيديوهات توضيحية.',
                keywords: 'خدمات، زينة، ديكور، كهرباء، سباكة، تفاصيل الخدمة، كهربائي ممتاز، فني كهربائي قريب مني، إصلاح التماس كهربائي، تركيب ثريات، تغيير طبلون الكهرباء، تسليك كهرباء، مهندس كهربائي، فحص مشاكل انقطاع الكهرباء، تمديد نقاط كهرباء، تركيب أفياش ومفاتيح، صيانة لوحات التوزيع، كشف تسربات المياه بدون تكسير، إصلاح تسريب كرسي الحمام، تركيب سخانات مياه، تسليك مجاري المطبخ، معالجة رطوبة الجدران، تمديد شبكات مياه، تركيب فلاتر مياه، صيانة مضخات المياه',
                ogTitle: 'تفاصيل الخدمات - زينة تاتش',
                ogDescription: 'اكتشف خدماتنا الاحترافية والمتنوعة مع تفاصيل كاملة وصور وفيديوهات.',
                ogImage: 'https://abuali782.github.io/Zena-Touch-v2/images/Decoration_Photos/IMG1.jpg'
            }
        };
    }

    /**
     * Get current page config
     */
    getCurrentPageConfig() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        return this.pageConfigs[currentPage] || this.pageConfigs['index.html'];
    }

    /**
     * Update or create meta tag
     */
    updateMetaTag(name, content, isProperty = false) {
        const attribute = isProperty ? 'property' : 'name';
        let tag = document.querySelector(`meta[${attribute}="${name}"]`);
        
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute(attribute, name);
            document.head.appendChild(tag);
        }
        
        tag.setAttribute('content', content);
    }

    /**
     * Optimize all meta tags
     */
    optimizeMetaTags() {
        const config = this.getCurrentPageConfig();
        
        // Update title
        document.title = config.title;
        
        // Update standard meta tags
        this.updateMetaTag('description', config.description);
        this.updateMetaTag('keywords', config.keywords);
        
        // Update Open Graph tags
        this.updateMetaTag('og:title', config.ogTitle, true);
        this.updateMetaTag('og:description', config.ogDescription, true);
        this.updateMetaTag('og:image', config.ogImage, true);
        
        // Update Twitter Card tags
        this.updateMetaTag('twitter:title', config.ogTitle);
        this.updateMetaTag('twitter:description', config.ogDescription);
        this.updateMetaTag('twitter:image', config.ogImage);
    }

    /**
     * Add viewport meta tag
     */
    ensureViewportMeta() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0';
            document.head.appendChild(viewport);
        }
    }

    /**
     * Add charset meta tag
     */
    ensureCharsetMeta() {
        let charset = document.querySelector('meta[charset]');
        if (!charset) {
            charset = document.createElement('meta');
            charset.charset = 'UTF-8';
            document.head.insertBefore(charset, document.head.firstChild);
        }
    }

    /**
     * Initialize optimizer
     */
    init() {
        this.ensureCharsetMeta();
        this.ensureViewportMeta();
        this.optimizeMetaTags();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const optimizer = new MetaTagsOptimizer();
    optimizer.init();
});
