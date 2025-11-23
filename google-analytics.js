/**
 * Google Analytics Integration
 * Tracks user behavior and conversions
 */

// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Note: Replace 'G-XXXXXXXXXX' with your actual Google Analytics ID
// gtag('config', 'G-XXXXXXXXXX', {
//     'page_path': window.location.pathname,
//     'page_title': document.title,
//     'language': 'ar'
// });

/**
 * Track Custom Events
 */
class AnalyticsTracker {
    /**
     * Track service inquiry
     */
    static trackServiceInquiry(serviceName) {
        gtag('event', 'service_inquiry', {
            'service_name': serviceName,
            'timestamp': new Date().toISOString()
        });
    }

    /**
     * Track contact form submission
     */
    static trackContactSubmission() {
        gtag('event', 'contact_form_submit', {
            'timestamp': new Date().toISOString()
        });
    }

    /**
     * Track WhatsApp click
     */
    static trackWhatsAppClick() {
        gtag('event', 'whatsapp_click', {
            'timestamp': new Date().toISOString()
        });
    }

    /**
     * Track Instagram click
     */
    static trackInstagramClick() {
        gtag('event', 'instagram_click', {
            'timestamp': new Date().toISOString()
        });
    }

    /**
     * Track phone call
     */
    static trackPhoneCall() {
        gtag('event', 'phone_call', {
            'timestamp': new Date().toISOString()
        });
    }

    /**
     * Track gallery view
     */
    static trackGalleryView(category) {
        gtag('event', 'gallery_view', {
            'category': category,
            'timestamp': new Date().toISOString()
        });
    }

    /**
     * Track page scroll
     */
    static trackPageScroll() {
        let scrollPercentage = 0;
        
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            
            // Track at 25%, 50%, 75%, and 100%
            if (scrolled > 25 && scrollPercentage < 25) {
                scrollPercentage = 25;
                gtag('event', 'scroll', { 'scroll_percentage': 25 });
            } else if (scrolled > 50 && scrollPercentage < 50) {
                scrollPercentage = 50;
                gtag('event', 'scroll', { 'scroll_percentage': 50 });
            } else if (scrolled > 75 && scrollPercentage < 75) {
                scrollPercentage = 75;
                gtag('event', 'scroll', { 'scroll_percentage': 75 });
            } else if (scrolled > 95 && scrollPercentage < 100) {
                scrollPercentage = 100;
                gtag('event', 'scroll', { 'scroll_percentage': 100 });
            }
        });
    }

    /**
     * Track time on page
     */
    static trackTimeOnPage() {
        let startTime = Date.now();
        
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            gtag('event', 'page_time', {
                'seconds': timeOnPage,
                'page': window.location.pathname
            });
        });
    }

    /**
     * Initialize all tracking
     */
    static init() {
        this.trackPageScroll();
        this.trackTimeOnPage();
    }
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    AnalyticsTracker.init();
    
    // Track contact form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            AnalyticsTracker.trackContactSubmission();
        });
    }
    
    // Track WhatsApp clicks
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', () => {
            AnalyticsTracker.trackWhatsAppClick();
        });
    });
    
    // Track Instagram clicks
    document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
        link.addEventListener('click', () => {
            AnalyticsTracker.trackInstagramClick();
        });
    });
    
    // Track phone calls
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            AnalyticsTracker.trackPhoneCall();
        });
    });
});
