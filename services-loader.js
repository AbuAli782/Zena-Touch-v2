/**
 * Services Gallery Loader
 * Handles dynamic loading of service images and videos with lazy loading
 * Performance optimizations: Lazy Loading, Image Optimization, HTTP Reduction
 */

class ServicesGalleryLoader {
    constructor() {
        this.services = {
            decoration: {
                folder: 'images/Decoration_Photos',
                icon: 'fas fa-paint-brush',
                title: 'الزينة والديكور'
            },
            electricity: {
                folder: 'images/Electricity_Photos',
                icon: 'fas fa-bolt',
                title: 'الكهرباء'
            },
            plumbing: {
                folder: 'images/Plumbing_Photos',
                icon: 'fas fa-wrench',
                title: 'السباكة'
            }
        };
        
        // Predefined media files for each service
        this.mediaFiles = {
            decoration: [
                'IMG1.jpg', 'IMG2.jpg', 'IMG3.jpg', 'IMG4.jpg', 'IMG5.jpg',
                'IMG6.jpg', 'IMG7.jpg', 'IMG8.jpg', 'IMG9.jpg', 'IMG10.jpg',
                'VID1.mp4', 'VID2.mp4', 'VID3.mp4', 'VID4.mp4', 'VID5.mp4'
            ],
            electricity: [
                'IMG1.jpg', 'IMG2.jpg', 'IMG3.jpg', 'IMG4.jpg', 'IMG5.jpg',
                'IMG6.jpg', 'IMG7.jpg', 'IMG8.jpg', 'IMG9.jpg', 'IMG10.jpg',
                'IMG25.mp4'
            ],
            plumbing: [
                'IMG1.jpg', 'IMG2.jpg', 'IMG3.jpg',
                'VID1.mp4', 'VID2.mp4'
            ]
        };
        
        this.swipers = {};
    }

    /**
     * Initialize all service galleries
     */
    init() {
        this.loadServiceGalleries();
        this.initializeSwipers();
    }

    /**
     * Load all service galleries dynamically
     */
    loadServiceGalleries() {
        Object.keys(this.services).forEach(service => {
            this.loadServiceGallery(service);
        });
    }

    /**
     * Load individual service gallery
     */
    loadServiceGallery(service) {
        const container = document.getElementById(`${service}Gallery`);
        if (!container) return;

        const files = this.mediaFiles[service] || [];
        const folder = this.services[service].folder;

        files.forEach((file, index) => {
            const isVideo = file.endsWith('.mp4');
            const slide = document.createElement('div');
            slide.className = 'swiper-slide service-media-slide';
            
            if (isVideo) {
                slide.innerHTML = `
                    <div class="media-container video-container">
                        <video class="service-video" controls preload="none" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E">
                            <source data-src="${folder}/${file}" type="video/mp4">
                            متصفحك لا يدعم تشغيل الفيديو
                        </video>
                        <div class="video-overlay">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                `;
            } else {
                slide.innerHTML = `
                    <div class="media-container image-container">
                        <img 
                            class="service-image" 
                            data-src="${folder}/${file}" 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E"
                            alt="صورة من ${this.services[service].title}"
                            loading="lazy"
                        >
                        <div class="image-overlay">
                            <a href="${folder}/${file}" data-lightbox="${service}-gallery" data-title="${this.services[service].title}" class="lightbox-link">
                                <i class="fas fa-expand"></i>
                            </a>
                        </div>
                    </div>
                `;
            }
            
            container.appendChild(slide);
        });
    }

    /**
     * Initialize Swiper instances for each service
     */
    initializeSwipers() {
        const swiperConfig = {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        };

        Object.keys(this.services).forEach(service => {
            const swiperElement = document.querySelector(`.${service}-swiper`);
            if (swiperElement) {
                this.swipers[service] = new Swiper(swiperElement, swiperConfig);
                this.setupLazyLoading(service);
            }
        });
    }

    /**
     * Setup lazy loading for images and videos
     */
    setupLazyLoading(service) {
        const container = document.getElementById(`${service}Gallery`);
        if (!container) return;

        // Create Intersection Observer for lazy loading
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target.querySelector('img[data-src]');
                    const video = entry.target.querySelector('video');

                    if (img) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(entry.target);
                    }

                    if (video) {
                        const source = video.querySelector('source[data-src]');
                        if (source) {
                            source.src = source.dataset.src;
                            source.removeAttribute('data-src');
                            video.load();
                            observer.unobserve(entry.target);
                        }
                    }
                }
            });
        }, {
            rootMargin: '50px'
        });

        // Observe all slides
        const slides = container.querySelectorAll('.service-media-slide');
        slides.forEach(slide => observer.observe(slide));
    }

    /**
     * Get media count for a service
     */
    getMediaCount(service) {
        return this.mediaFiles[service]?.length || 0;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const loader = new ServicesGalleryLoader();
    loader.init();
});
