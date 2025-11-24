/**
 * Video Handler - Comprehensive video playback solution
 * Handles video loading, buffering, and playback across all pages
 */

class VideoHandler {
    constructor() {
        this.videos = [];
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupVideos());
        } else {
            this.setupVideos();
        }
    }

    setupVideos() {
        // Get all video elements
        const allVideos = document.querySelectorAll('video');
        
        allVideos.forEach((video, index) => {
            this.configureVideo(video, index);
        });

        // Also handle videos that might be added dynamically
        this.observeDOMChanges();
    }

    configureVideo(video, index) {
        // Force enable controls
        video.controls = true;
        video.setAttribute('controls', '');
        
        // Set preload
        video.preload = 'auto';
        video.setAttribute('preload', 'auto');
        
        // Set crossorigin
        video.setAttribute('crossorigin', 'anonymous');
        
        // Add unique ID if not present
        if (!video.id) {
            video.id = `video-${index}-${Date.now()}`;
        }

        // Ensure source elements have correct type
        const sources = video.querySelectorAll('source');
        sources.forEach(source => {
            if (!source.type) {
                source.type = 'video/mp4';
            }
        });

        // Enable all video features
        video.style.pointerEvents = 'auto';
        video.style.cursor = 'pointer';

        // Add error handling
        video.addEventListener('error', (e) => {
            console.error(`Video error for ${video.id}:`, e);
            this.handleVideoError(video);
        }, { once: false });

        // Add play event
        video.addEventListener('play', () => {
            console.log(`Video playing: ${video.id}`);
        });

        // Store reference
        this.videos.push(video);
    }

    ensureVideoVisibility(video) {
        const container = video.closest('.portfolio-video-container');
        
        if (container) {
            // Let CSS handle the styling, just ensure it's positioned correctly
            container.style.position = 'absolute';
            container.style.top = '0';
            container.style.left = '0';
        }

        // Let CSS handle the video styling
        // Only set essential properties that CSS can't override
        video.style.display = 'block';
    }

    handleVideoError(video) {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'video-error-message';
        errorMsg.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            z-index: 10;
            font-size: 14px;
        `;
        errorMsg.innerHTML = `
            <i class="fas fa-exclamation-circle" style="font-size: 32px; margin-bottom: 10px; display: block;"></i>
            <p>عذراً، لم يتمكن من تحميل الفيديو</p>
            <small>يرجى التحقق من اتصالك بالإنترنت</small>
        `;

        const container = video.parentElement;
        if (container) {
            container.style.position = 'relative';
            container.appendChild(errorMsg);
        }
    }

    observeDOMChanges() {
        // Use MutationObserver to watch for dynamically added videos
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === 1) { // Element node
                            const videos = node.querySelectorAll ? node.querySelectorAll('video') : [];
                            videos.forEach((video, index) => {
                                if (!video.id || !this.videos.includes(video)) {
                                    this.configureVideo(video, this.videos.length + index);
                                }
                            });
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Public method to reload all videos
    reloadAllVideos() {
        this.videos.forEach(video => {
            video.load();
        });
    }

    // Public method to play all videos
    playAllVideos() {
        this.videos.forEach(video => {
            video.play().catch(err => {
                console.warn(`Could not play video: ${err}`);
            });
        });
    }

    // Public method to pause all videos
    pauseAllVideos() {
        this.videos.forEach(video => {
            video.pause();
        });
    }
}

// Initialize video handler when script loads
const videoHandler = new VideoHandler();

// Make it globally accessible
window.videoHandler = videoHandler;
