// ========================================
// HERO VIDEO ROTATION WITH SEQUENTIAL TEXT
// ========================================
function initializeHeroVideo() {
    const heroVideo = document.getElementById('heroVideo');
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    
    if (!heroVideo || !heroTitle || !heroSubtitle) {
        console.log('Hero video elements not found on this page');
        return;
    }

    const heroVideos = [
        {
            src: 'images/Decoration_Photos/VID10.mp4',
            title: 'زين منزلك بلمسة احترافية',
            subtitle: 'خدمات الزينة والديكور الفاخرة'
        },
        {
            src: 'images/Decoration_Photos/VID11.mp4',
            title: 'ديكورات عصرية وفريدة',
            subtitle: 'نحول أحلامك إلى واقع جميل'
        },
        {
            src: 'images/Decoration_Photos/VID12.mp4',
            title: 'تصاميم تناسب ذوقك',
            subtitle: 'جودة عالية وأسعار منافسة'
        },
        {
            src: 'images/Decoration_Photos/VID13.mp4',
            title: 'خدمات كهربائية احترافية',
            subtitle: 'تركيب وصيانة آمنة وموثوقة'
        },
        {
            src: 'images/Decoration_Photos/VID14.mp4',
            title: 'حلول كهربائية متقدمة',
            subtitle: 'فريق متخصص وخبرة عالية'
        },
        {
            src: 'images/Decoration_Photos/VID15.mp4',
            title: 'كهرباء بمعايير عالمية',
            subtitle: 'ضمان الجودة والسلامة'
        },
        {
            src: 'images/Decoration_Photos/VID16.mp4',
            title: 'خدمات سباكة متميزة',
            subtitle: 'حلول سريعة وفعالة'
        },
        {
            src: 'images/Decoration_Photos/VID17.mp4',
            title: 'سباكة احترافية وموثوقة',
            subtitle: 'نحل جميع مشاكل السباكة'
        },
        {
            src: 'images/Decoration_Photos/VID18.mp4',
            title: 'أفضل خدمات السباكة',
            subtitle: 'فريق متدرب وخبرة عملية'
        },
        {
            src: 'images/Decoration_Photos/VID19.mp4',
            title: 'زينة وديكور راقي',
            subtitle: 'اختر من تصاميم متنوعة'
        },
        {
            src: 'images/Decoration_Photos/VID20.mp4',
            title: 'تحويل المساحات بإبداع',
            subtitle: 'ديكور يعكس شخصيتك'
        },
        {
            src: 'images/Decoration_Photos/VID21.mp4',
            title: 'جودة في كل التفاصيل',
            subtitle: 'نهتم برضاك وسعادتك'
        },
        {
            src: 'images/Decoration_Photos/VID22.mp4',
            title: 'كهرباء آمنة وموثوقة',
            subtitle: 'تقنيات حديثة وآمنة'
        },
        {
            src: 'images/Decoration_Photos/VID23.mp4',
            title: 'صيانة دورية احترافية',
            subtitle: 'نضمن سلامة منزلك'
        },
        {
            src: 'images/Decoration_Photos/VID24.mp4',
            title: 'استشارات كهربائية مجانية',
            subtitle: 'تواصل معنا اليوم'
        },
        {
            src: 'images/Decoration_Photos/VID25.mp4',
            title: 'سباكة بدون مشاكل',
            subtitle: 'حلول دائمة وفعالة'
        },
        {
            src: 'images/Decoration_Photos/VID26.mp4',
            title: 'صيانة سباكة شاملة',
            subtitle: 'نحافظ على منزلك'
        },
        {
            src: 'images/Decoration_Photos/VID27.mp4',
            title: 'تسريب مياه؟ لا مشكلة',
            subtitle: 'نحل المشكلة بسرعة'
        },
        {
            src: 'images/Decoration_Photos/VID28.mp4',
            title: 'ديكور يدوم طويلاً',
            subtitle: 'مواد عالية الجودة'
        },
        {
            src: 'images/Decoration_Photos/VID29.mp4',
            title: 'خدمات متكاملة وشاملة',
            subtitle: 'كل احتياجاتك في مكان واحد'
        },
        {
            src: 'images/Decoration_Photos/VID30.mp4',
            title: 'اختر الأفضل لمنزلك',
            subtitle: 'زينة تاتش - الخيار الأول'
        }
    ];

    let currentVideoIndex = 0;

    function changeHeroVideo() {
        const videoData = heroVideos[currentVideoIndex];
        const videoSource = heroVideo.querySelector('source');
        
        // Update video source
        videoSource.src = videoData.src;
        
        // Update text with fade animation
        heroTitle.style.opacity = '0';
        heroSubtitle.style.opacity = '0';
        
        setTimeout(() => {
            heroTitle.textContent = videoData.title;
            heroSubtitle.textContent = videoData.subtitle;
            heroTitle.style.opacity = '1';
            heroSubtitle.style.opacity = '1';
        }, 300);
        
        // Load and play video
        heroVideo.load();
        heroVideo.play().catch(error => {
            console.log('Video playback error:', error);
        });
        
        currentVideoIndex = (currentVideoIndex + 1) % heroVideos.length;
    }

    // Initial video load
    changeHeroVideo();

    // Change video when it ends (sequential playback)
    heroVideo.addEventListener('ended', changeHeroVideo);
}

// ========================================
// SERVICE VIDEOS ROTATION
// ========================================
function initializeServiceVideos() {
    const serviceVideos = document.querySelectorAll('.service-video');
    
    serviceVideos.forEach((video, index) => {
        const videoSources = [
            ['videos/decoration-1.mp4', 'videos/decoration-2.mp4', 'videos/decoration-3.mp4'],
            ['videos/electricity-1.mp4', 'videos/electricity-2.mp4', 'videos/electricity-3.mp4'],
            ['videos/plumbing-1.mp4', 'videos/plumbing-2.mp4', 'videos/plumbing-3.mp4'],
        ];

        let currentIndex = 0;
        const videoList = videoSources[index] || videoSources[0];

        function changeServiceVideo() {
            const source = video.querySelector('source');
            if (source) {
                source.src = videoList[currentIndex];
                video.load();
                video.play();
                currentIndex = (currentIndex + 1) % videoList.length;
            }
        }

        // Change video every 6 seconds
        setInterval(changeServiceVideo, 6000);
    });
}

// ========================================
// GALLERY INITIALIZATION
// ========================================
function initializeGallery() {
    const galleryWrapper = document.getElementById('galleryWrapper');
    if (!galleryWrapper) return; // Exit if element doesn't exist
    
    const images = [
        { src: 'images/Decoration_Photos/IMG1.jpg', alt: 'ديكور 1' },
        { src: 'images/Decoration_Photos/IMG2.jpg', alt: 'ديكور 2' },
        { src: 'images/Decoration_Photos/IMG3.jpg', alt: 'ديكور 3' },
        { src: 'images/Decoration_Photos/IMG4.jpg', alt: 'ديكور 4' },
        { src: 'images/Decoration_Photos/IMG5.jpg', alt: 'ديكور 5' },
        { src: 'images/Decoration_Photos/IMG6.jpg', alt: 'ديكور 6' },
        { src: 'images/Electricity_Photos/IMG1.jpg', alt: 'كهرباء 1' },
        { src: 'images/Electricity_Photos/IMG2.jpg', alt: 'كهرباء 2' },
        { src: 'images/Plumbing_Photos/IMG1.jpg', alt: 'سباكة 1' },
        { src: 'images/Plumbing_Photos/IMG2.jpg', alt: 'سباكة 2' },
    ];

    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
            <a href="${image.src}" data-lightbox="gallery" data-title="${image.alt}">
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
            </a>
        `;
        galleryWrapper.appendChild(slide);
    });

    // Initialize Swiper
    const swiper = new Swiper('.gallerySwiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return; // Exit if elements don't exist

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// NAVBAR SHADOW ON SCROLL
// ========================================
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // Exit if navbar doesn't exist
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = 'var(--shadow-lg)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });
}

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .swiper-slide').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// ========================================
// CONTACT FORM WHATSAPP INTEGRATION
// ========================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !phone || !message) {
            alert('الرجاء ملء جميع الحقول');
            return;
        }

        const whatsappMessage = `*رسالة جديدة من موقع زينة تاتش*

*الاسم:* ${name}
*البريد الإلكتروني:* ${email}
*رقم الهاتف:* ${phone}
*الرسالة:* ${message}
*التاريخ والوقت:* ${new Date().toLocaleString('ar-SA')}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = '966551234567';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        alert('شكراً لك! سيتم فتح WhatsApp لإرسال رسالتك.');
        window.open(whatsappURL, '_blank');
        contactForm.reset();
    });
}

// ========================================
// INITIALIZE ALL
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeHeroVideo();
    initializeServiceVideos();
    initializeGallery();
    initializeMobileMenu();
    initializeSmoothScroll();
    initializeNavbarScroll();
    initializeIntersectionObserver();
    initializeContactForm();
});
