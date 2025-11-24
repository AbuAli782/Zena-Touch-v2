/**
 * Lightbox Fix
 * Handles compatibility issues with Lightbox 2
 */

document.addEventListener('DOMContentLoaded', function() {
    // Fix for Lightbox initialization
    if (typeof lightbox !== 'undefined') {
        try {
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'صورة %1 من %2'
            });
        } catch (e) {
            console.log('Lightbox initialization error:', e);
        }
    }

    // Ensure all gallery links have proper data attributes
    const galleryLinks = document.querySelectorAll('a[data-lightbox]');
    galleryLinks.forEach(link => {
        if (!link.href) {
            link.href = link.getAttribute('data-src') || '#';
        }
        if (!link.title && link.getAttribute('data-title')) {
            link.title = link.getAttribute('data-title');
        }
    });

    // Handle video lightbox
    const videoLinks = document.querySelectorAll('a[data-lightbox*="video"]');
    videoLinks.forEach(link => {
        if (!link.getAttribute('data-video-id')) {
            const videoId = link.getAttribute('data-video-id') || link.href.split('v=')[1];
            if (videoId) {
                link.setAttribute('data-video-id', videoId);
            }
        }
    });
});

// Reinitialize Lightbox after dynamic content loading
function reinitializeLightbox() {
    if (typeof lightbox !== 'undefined') {
        try {
            // Lightbox 2 doesn't have an init() method
            // Instead, we refresh by setting options which re-binds to elements
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'صورة %1 من %2'
            });
        } catch (e) {
            console.log('Lightbox reinitialization error:', e);
        }
    }
}

// Export for use in other scripts
window.reinitializeLightbox = reinitializeLightbox;
