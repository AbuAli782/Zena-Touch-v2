// ========================================
// DECORATION SERVICE DATA
// ========================================

const decorationData = {
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
            media: item.media
        }));
    }
};

// ========================================
// LOAD SERVICE CONTENT
// ========================================

function loadServiceContent() {
    const serviceData = decorationData;

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
            galleryItem.className = 'gallery-item video-item';
            galleryItem.innerHTML = `
                <div class="portfolio-video-container">
                    <video controls preload="auto" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E" crossorigin="anonymous">
                        <source src="${item.media}" type="video/mp4">
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                </div>
            `;
        } else {
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <a href="${item.media}" data-lightbox="decoration-gallery" data-title="${serviceData.title} - ${index + 1}">
                    <img src="${item.media}" alt="${serviceData.title} ${index + 1}" loading="lazy">
                    <div class="image-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                </a>
            `;
        }

        galleryGrid.appendChild(galleryItem);
    });

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

    // Trigger video handler to configure videos
    if (typeof videoHandler !== 'undefined') {
        setTimeout(() => {
            videoHandler.setupVideos();
        }, 100);
    }
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
            service: 'decoration',
            timestamp: new Date().toISOString()
        };

        const whatsappMessage = `*طلب خدمة جديد من موقع زينة تاتش*

*الخدمة:* الزينة والديكور
*الاسم:* ${formData.name}
*رقم الجوال:* ${formData.phone}
*البريد الإلكتروني:* ${formData.email}
*الرسالة:* ${formData.message}
*التاريخ والوقت:* ${new Date().toLocaleString('ar-SA')}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = '966551234567';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        alert('شكراً لك! سيتم فتح WhatsApp لإرسال طلبك.');
        window.open(whatsappURL, '_blank');
        form.reset();
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
