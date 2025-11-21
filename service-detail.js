// ========================================
// SERVICE DATA - استخدام بيانات من portfolio.js
// ========================================

const servicesData = {
    decoration: {
        title: 'الزينة والديكور',
        description: 'نحول بيتك لحلم جميل. ديكور عصري يعكس ذوقك وشخصيتك بأسلوب احترافي.',
        longDescription: 'نقدم لك حلول متكاملة في الديكور والتصميم الداخلي تجمع بين الجمال والعملية. نختار أفضل المواد والألوان اللي تناسب ذوقك. كل مشروع فريد ومخصص حسب احتياجاتك وتصورك.',
        features: [
            { icon: 'fas fa-wand-magic-sparkles', title: 'تصاميم عصرية', description: 'أحدث الأفكار الديكورية اللي تواكب الموضة العالمية' },
            { icon: 'fas fa-palette', title: 'ألوان متناسقة', description: 'اختيار الألوان المناسبة لمساحتك بدراسة احترافية' },
            { icon: 'fas fa-people-group', title: 'فريق متخصص', description: 'فريقنا محترف وذو خبرة عالية في التصميم الداخلي' },
            { icon: 'fas fa-bolt', title: 'تنفيذ سريع', description: 'ننهي الشغل في الوقت المحدد بدون تأخير' },
            { icon: 'fas fa-tag', title: 'أسعار عادلة', description: 'أفضل جودة بأسعار منطقية وشفافة' },
            { icon: 'fas fa-shield-check', title: 'ضمان العمل', description: 'ضمان شامل على جودة العمل والمواد' },
        ],
        get media() {
            return portfolioData.filter(item => item.category === 'decoration').map(item => ({
                type: item.type,
                src: item.media
            }));
        }
    },
    electricity: {
        title: 'الكهرباء',
        description: 'كهرباء آمنة وموثوقة. تركيب وصيانة احترافية بأعلى معايير الأمان.',
        longDescription: 'نقدم خدمات كهربائية شاملة بمعايير أمان عالية جداً. فريقنا مرخص ومدرب على أحدث المعايير الدولية. نضمن سلامتك وسلامة عائلتك مع التزام كامل بالمواصفات الكهربائية.',
        features: [
            { icon: 'fas fa-plug', title: 'تركيب احترافي', description: 'تركيب كهربائي آمن وموثوق حسب المعايير الدولية' },
            { icon: 'fas fa-wrench', title: 'صيانة دورية', description: 'صيانة منتظمة وإصلاح سريع للأعطال' },
            { icon: 'fas fa-shield-check', title: 'معايير الأمان', description: 'التزام كامل بمعايير الأمان والسلامة الكهربائية' },
            { icon: 'fas fa-zap', title: 'خدمة سريعة', description: 'نرد على طلباتك الطارئة بسرعة' },
            { icon: 'fas fa-leaf', title: 'توفير الطاقة', description: 'حلول ذكية لتقليل فاتورة الكهرباء' },
            { icon: 'fas fa-phone', title: 'دعم 24/7', description: 'فريق الدعم متاح لك طول الوقت' },
        ],
        get media() {
            return portfolioData.filter(item => item.category === 'electricity').map(item => ({
                type: item.type,
                src: item.media
            }));
        }
    },
    plumbing: {
        title: 'السباكة',
        description: 'حل سريع لمشاكل السباكة. تركيب وصيانة احترافية بأسعار عادلة.',
        longDescription: 'نقدم لك خدمات سباكة شاملة من التركيب الجديد للصيانة والإصلاح. فريقنا محترف ويستخدم أحدث الأدوات والتقنيات. نحل مشاكلك بسرعة وكفاءة بأسعار منطقية وشفافة.',
        features: [
            { icon: 'fas fa-droplet', title: 'إصلاح سريع', description: 'إصلاح فوري للتسريبات والأعطال' },
            { icon: 'fas fa-pipe', title: 'تركيب أنابيب', description: 'تركيب أنابيب بأعلى جودة ومواد معتمدة' },
            { icon: 'fas fa-broom', title: 'تنظيف الأنابيب', description: 'تنظيف وتسليك الأنابيب المسدودة بتقنيات حديثة' },
            { icon: 'fas fa-tools', title: 'صيانة دورية', description: 'صيانة منتظمة للأنظمة السباكية' },
            { icon: 'fas fa-check', title: 'ضمان العمل', description: 'ضمان شامل على جميع الأعمال والمواد' },
            { icon: 'fas fa-wallet', title: 'أسعار عادلة', description: 'أسعار شفافة بدون تكاليف مخفية' },
        ],
        get media() {
            return portfolioData.filter(item => item.category === 'plumbing').map(item => ({
                type: item.type,
                src: item.media
            }));
        }
    }
};

// ========================================
// GET SERVICE FROM URL
// ========================================

function getServiceFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || 'decoration';
}


// ========================================
// LOAD SERVICE CONTENT
// ========================================

function loadServiceContent() {
    const service = getServiceFromURL();
    const serviceData = servicesData[service];

    if (!serviceData) {
        window.location.href = 'index.html';
        return;
    }

    // Load Hero Section
    const heroSection = document.getElementById('serviceHero');
    heroSection.innerHTML = '';
    const heroContent = document.createElement('div');
    heroContent.className = 'service-hero-content';
    
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = serviceData.title;
    
    const heroDesc = document.createElement('p');
    heroDesc.textContent = serviceData.description;
    
    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroDesc);
    heroSection.appendChild(heroContent);

    // Load Description
    const descriptionSection = document.getElementById('serviceDescription');
    descriptionSection.innerHTML = '';
    const descContent = document.createElement('div');
    descContent.className = 'description-content';

    const descTitle = document.createElement('h2');
    descTitle.textContent = serviceData.title;

    const introText = document.createElement('p');
    introText.className = 'intro-text';
    introText.textContent = serviceData.description;

    const longText = document.createElement('p');
    longText.className = 'long-text';
    longText.textContent = serviceData.longDescription;

    const descFooter = document.createElement('div');
    descFooter.className = 'description-footer';
    const footerText = document.createElement('p');
    footerText.textContent = 'نحن نقدم خدمات عالية الجودة بأسعار منافسة وفريق محترف يعمل على رضاك التام. اختر خدمتنا واستمتع بالفرق.';
    descFooter.appendChild(footerText);

    descContent.appendChild(descTitle);
    descContent.appendChild(introText);
    descContent.appendChild(longText);
    descContent.appendChild(descFooter);
    descriptionSection.appendChild(descContent);

    // Load Features
    const featuresGrid = document.getElementById('featuresGrid');
    featuresGrid.innerHTML = '';
    
    serviceData.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';

        const featureIcon = document.createElement('div');
        featureIcon.className = 'feature-icon';
        const icon = document.createElement('i');
        icon.className = feature.icon;
        featureIcon.appendChild(icon);

        const featureTitle = document.createElement('h3');
        featureTitle.textContent = feature.title;

        const featureDesc = document.createElement('p');
        featureDesc.textContent = feature.description;

        featureItem.appendChild(featureIcon);
        featureItem.appendChild(featureTitle);
        featureItem.appendChild(featureDesc);
        featuresGrid.appendChild(featureItem);
    });

    // Load Gallery with proper video and image handling
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    serviceData.media.forEach((item, index) => {
        const galleryItem = document.createElement('div');

        if (item.type === 'video') {
            // نفس الطريقة من portfolio.js بالضبط
            galleryItem.className = 'gallery-item video-item';
            galleryItem.innerHTML = `
                <div class="portfolio-video-container">
                    <video controls preload="metadata" style="width: 100%; height: 100%;" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E">
                        <source src="${item.src}" type="video/mp4">
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                </div>
            `;
        } else {
            // الصور مع Lightbox
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <a href="${item.src}" data-lightbox="service-gallery" data-title="${serviceData.title} - ${index + 1}">
                    <img src="${item.src}" alt="${serviceData.title} ${index + 1}" loading="lazy">
                    <div class="image-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                </a>
            `;
        }

        galleryGrid.appendChild(galleryItem);
    });

    // Add back button to Lightbox
    addLightboxBackButton();

    // Update page title
    document.title = `${serviceData.title} - زينة تاتش`;

    // Reinitialize Lightbox
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'صورة %1 من %2'
        });
    }
}

// ========================================
// ADD BACK BUTTON TO LIGHTBOX
// ========================================

function addLightboxBackButton() {
    // Wait for Lightbox to be ready
    setTimeout(() => {
        const lightboxElements = document.querySelectorAll('[data-lightbox]');
        
        lightboxElements.forEach(element => {
            element.addEventListener('click', () => {
                setTimeout(() => {
                    const lightboxContainer = document.querySelector('.lb-container');
                    if (lightboxContainer) {
                        // Check if back button already exists
                        if (!document.querySelector('.lightbox-back-btn')) {
                            const backButton = document.createElement('button');
                            backButton.className = 'lightbox-back-btn';
                            backButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
                            backButton.title = 'العودة إلى المعرض';
                            backButton.addEventListener('click', (e) => {
                                e.stopPropagation();
                                // Close lightbox
                                const closeButton = document.querySelector('.lb-close');
                                if (closeButton) {
                                    closeButton.click();
                                }
                            });
                            
                            const lightboxNav = document.querySelector('.lb-nav');
                            if (lightboxNav) {
                                lightboxNav.appendChild(backButton);
                            }
                        }
                    }
                }, 100);
            });
        });
    }, 500);
}

// ========================================
// FORM SUBMISSION
// ========================================

function initializeForm() {
    const form = document.getElementById('serviceForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            service: getServiceFromURL(),
            timestamp: new Date().toISOString()
        };

        // For now, just show a success message
        // Later this will be connected to the backend
        alert('شكراً لك! تم استقبال طلبك. سيتم التواصل معك قريباً.');
        form.reset();

        // Log to console (for debugging)
        console.log('Form Data:', formData);
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ========================================
// INITIALIZE ALL
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadServiceContent();
    initializeForm();
    initializeMobileMenu();
});
