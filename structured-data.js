/**
 * Structured Data Management
 * Adds comprehensive schema.org markup for better SEO
 */

class StructuredDataManager {
    constructor() {
        this.baseUrl = 'https://abuali782.github.io/Zena-Touch-v2';
    }

    /**
     * Add FAQs Schema
     */
    addFAQSchema() {
        const faqs = [
            {
                question: 'كم تكلفة إضاءة حديقة منزل؟',
                answer: 'تختلف التكاليف حسب حجم الحديقة والتصميم المطلوب. نقدم استشارات مجانية وعروض أسعار مفصلة.'
            },
            {
                question: 'ما هي أفضل إضاءة لواجهة المنزل؟',
                answer: 'نستخدم أفضل أنواع الإضاءة LED الحديثة التي توفر كفاءة عالية وتصاميم عصرية.'
            },
            {
                question: 'كيف أختار الإضاءة الخارجية للمنزل؟',
                answer: 'فريقنا المتخصص يساعدك في اختيار الإضاءة المناسبة حسب احتياجاتك والمساحة المتاحة.'
            },
            {
                question: 'هل يوجد كهربائي ٢٤ ساعة في الخبر؟',
                answer: 'نعم، نقدم خدمات طوارئ ٢٤/٧ في الدمام والخبر والمناطق المجاورة.'
            },
            {
                question: 'كم سعر كشف تسربات المياه؟',
                answer: 'نقدم خدمة كشف تسربات بدون تكسير بأسعار منافسة. تواصل معنا للحصول على عرض سعر.'
            },
            {
                question: 'كيف أعرف مكان تسرب الماء في الجدار؟',
                answer: 'فريقنا المتخصص يستخدم أجهزة حديثة للكشف الدقيق عن مكان التسرب بدون تكسير.'
            }
        ];

        const schema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': faqs.map(faq => ({
                '@type': 'Question',
                'name': faq.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.answer
                }
            }))
        };

        this.addSchema(schema);
    }

    /**
     * Add Service Schema
     */
    addServiceSchema() {
        const services = [
            {
                name: 'الزينة والديكور',
                description: 'خدمات زينة وديكور احترافية وعصرية',
                url: this.baseUrl + '/service-detail.html?service=decoration'
            },
            {
                name: 'خدمات الكهرباء',
                description: 'تركيب وصيانة كهربائية احترافية وآمنة',
                url: this.baseUrl + '/service-detail.html?service=electricity'
            },
            {
                name: 'خدمات السباكة',
                description: 'حلول سباكة موثوقة وسريعة',
                url: this.baseUrl + '/service-detail.html?service=plumbing'
            }
        ];

        services.forEach(service => {
            const schema = {
                '@context': 'https://schema.org',
                '@type': 'Service',
                'name': service.name,
                'description': service.description,
                'provider': {
                    '@type': 'LocalBusiness',
                    'name': 'Zeina Touch - زينة تاتش',
                    'url': this.baseUrl
                },
                'areaServed': [
                    'الدمام', 'الخبر', 'العزيزية', 'القطيف', 
                    'سيهات', 'أم الساهك', 'الجبيل', 'رأس تنورة'
                ],
                'url': service.url
            };

            this.addSchema(schema);
        });
    }

    /**
     * Add Review Schema
     */
    addReviewSchema() {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Zeina Touch - زينة تاتش',
            'image': this.baseUrl + '/images/Decoration_Photos/IMG1.jpg',
            'description': 'خدمات زينة وديكور احترافية، كهرباء، وسباكة في الدمام والخبر',
            'address': {
                '@type': 'PostalAddress',
                'streetAddress': 'الدمام - الخبر',
                'addressLocality': 'الدمام',
                'addressRegion': 'المنطقة الشرقية',
                'postalCode': '34423',
                'addressCountry': 'SA'
            },
            'telephone': '+966551234567',
            'url': this.baseUrl,
            'email': 'info@zenatouch.com',
            'priceRange': '$$',
            'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': '4.8',
                'reviewCount': '150',
                'bestRating': '5',
                'worstRating': '1'
            },
            'review': [
                {
                    '@type': 'Review',
                    'reviewRating': {
                        '@type': 'Rating',
                        'ratingValue': '5',
                        'bestRating': '5',
                        'worstRating': '1'
                    },
                    'author': {
                        '@type': 'Person',
                        'name': 'عميل راضٍ'
                    },
                    'reviewBody': 'خدمات ممتازة وفريق محترف جداً'
                }
            ]
        };

        this.addSchema(schema);
    }

    /**
     * Add Organization Schema
     */
    addOrganizationSchema() {
        const schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'Zeina Touch - زينة تاتش',
            'url': this.baseUrl,
            'logo': this.baseUrl + '/images/Decoration_Photos/IMG1.jpg',
            'description': 'شركة متخصصة في خدمات الزينة والديكور والكهرباء والسباكة',
            'sameAs': [
                'https://www.instagram.com/zinatech?utm_source=qr&igsh=MW5uYnJubGdrZjFoeA==',
                'https://wa.me/966551234567'
            ],
            'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'Customer Service',
                'telephone': '+966551234567',
                'email': 'info@zenatouch.com',
                'areaServed': ['SA'],
                'availableLanguage': ['ar', 'en']
            }
        };

        this.addSchema(schema);
    }

    /**
     * Add generic schema
     */
    addSchema(schema) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
    }

    /**
     * Initialize all structured data
     */
    init() {
        this.addOrganizationSchema();
        this.addServiceSchema();
        this.addFAQSchema();
        this.addReviewSchema();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const structuredDataManager = new StructuredDataManager();
    structuredDataManager.init();
});
