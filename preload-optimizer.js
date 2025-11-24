/**
 * Preload Optimizer
 * Removes unnecessary preload hints that are not used within a few seconds
 * and optimizes resource loading
 */

document.addEventListener('DOMContentLoaded', function() {
    // Remove unused preload links after page load
    setTimeout(() => {
        const preloadLinks = document.querySelectorAll('link[rel="preload"]');
        
        preloadLinks.forEach(link => {
            const href = link.getAttribute('href');
            const as = link.getAttribute('as');
            
            // Check if the resource is actually used on the page
            let isUsed = false;
            
            if (as === 'image') {
                // Check if image is referenced in the DOM
                isUsed = document.querySelector(`img[src="${href}"]`) !== null ||
                         document.querySelector(`[style*="${href}"]`) !== null;
            } else if (as === 'script') {
                // Check if script is loaded
                isUsed = document.querySelector(`script[src="${href}"]`) !== null;
            } else if (as === 'style') {
                // Check if stylesheet is loaded
                isUsed = document.querySelector(`link[href="${href}"]`) !== null;
            }
            
            // Remove preload if not used
            if (!isUsed) {
                link.remove();
                console.log(`Removed unused preload: ${href}`);
            }
        });
    }, 3000); // Wait 3 seconds after page load
});

// Optimize image loading
function optimizeImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeImageLoading);
} else {
    optimizeImageLoading();
}
