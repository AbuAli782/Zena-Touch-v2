/**
 * Mobile-First Indexing Optimization
 * Ensures optimal mobile experience and proper indexing
 */

(function() {
    'use strict';

    // 1. Verify Mobile Viewport Meta Tag
    function verifyViewportMeta() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
            document.head.appendChild(viewport);
        }
    }

    // 2. Optimize Touch Targets
    function optimizeTouchTargets() {
        const buttons = document.querySelectorAll('button, a, input[type="button"]');
        buttons.forEach(button => {
            const rect = button.getBoundingClientRect();
            if (rect.width < 48 || rect.height < 48) {
                button.style.padding = '12px 16px';
                button.style.minHeight = '48px';
                button.style.minWidth = '48px';
            }
        });
    }

    // 3. Optimize Font Sizes for Mobile
    function optimizeFontSizes() {
        if (window.innerWidth < 768) {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach(heading => {
                const fontSize = window.getComputedStyle(heading).fontSize;
                const size = parseFloat(fontSize);
                if (size > 32) {
                    heading.style.fontSize = (size * 0.85) + 'px';
                }
            });
        }
    }

    // 4. Prevent Horizontal Scrolling
    function preventHorizontalScroll() {
        document.body.style.overflowX = 'hidden';
        
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            const width = element.offsetWidth;
            if (width > window.innerWidth) {
                element.style.maxWidth = '100%';
                element.style.overflowX = 'hidden';
            }
        });
    }

    // 5. Optimize Images for Mobile
    function optimizeImagesForMobile() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add responsive image attributes
            if (!img.hasAttribute('sizes')) {
                img.setAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
            }
            
            // Ensure images don't exceed viewport
            img.style.maxWidth = '100%';
            img.style.height = 'auto';
            img.style.display = 'block';
        });
    }

    // 6. Optimize Navigation for Mobile
    function optimizeNavigation() {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.innerWidth < 768) {
            navbar.style.position = 'sticky';
            navbar.style.top = '0';
            navbar.style.zIndex = '1000';
        }
    }

    // 7. Add Mobile-Friendly Meta Tags
    function addMobileMetaTags() {
        const metaTags = [
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            { name: 'apple-mobile-web-app-title', content: 'زينة تاتش' },
            { name: 'theme-color', content: '#3A506B' },
            { name: 'format-detection', content: 'telephone=yes' }
        ];

        metaTags.forEach(tag => {
            let meta = document.querySelector(`meta[name="${tag.name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                meta.name = tag.name;
                meta.content = tag.content;
                document.head.appendChild(meta);
            }
        });
    }

    // 8. Optimize Form Inputs for Mobile
    function optimizeFormInputs() {
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.style.fontSize = '16px'; // Prevent zoom on iOS
            input.style.padding = '12px';
            input.style.minHeight = '44px';
            
            // Add appropriate input types
            if (input.type === 'text' && input.name.includes('phone')) {
                input.type = 'tel';
            }
            if (input.type === 'text' && input.name.includes('email')) {
                input.type = 'email';
            }
        });
    }

    // 9. Optimize CSS Media Queries
    function verifyCSSMediaQueries() {
        const stylesheets = document.styleSheets;
        let hasMediaQueries = false;
        
        for (let i = 0; i < stylesheets.length; i++) {
            try {
                const rules = stylesheets[i].cssRules;
                for (let j = 0; j < rules.length; j++) {
                    if (rules[j].type === CSSRule.MEDIA_RULE) {
                        hasMediaQueries = true;
                        break;
                    }
                }
            } catch (e) {
                // Cross-origin stylesheets may throw errors
            }
        }
        
        console.log('CSS Media Queries Present:', hasMediaQueries);
    }

    // 10. Optimize Touch Events
    function optimizeTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);

        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                // Swiped left
                console.log('Swiped left');
            }
            if (touchEndX > touchStartX + 50) {
                // Swiped right
                console.log('Swiped right');
            }
        }
    }

    // 11. Add Mobile-Specific Schema Markup
    function addMobileSchema() {
        const mobileSchema = {
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "زينة تاتش",
            "url": "https://abuali782.github.io/Zena-Touch-v2/",
            "applicationCategory": "BusinessApplication"
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(mobileSchema);
        document.head.appendChild(script);
    }

    // 12. Optimize Click Areas
    function optimizeClickAreas() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            const rect = link.getBoundingClientRect();
            if (rect.height < 44 || rect.width < 44) {
                link.style.padding = '12px';
                link.style.display = 'inline-block';
            }
        });
    }

    // 13. Detect Mobile Device
    function detectMobileDevice() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        document.documentElement.classList.add(isMobile ? 'is-mobile' : 'is-desktop');
        return isMobile;
    }

    // 14. Optimize Viewport for Different Devices
    function optimizeViewportForDevice() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        if (width < 480) {
            document.documentElement.style.fontSize = '14px';
        } else if (width < 768) {
            document.documentElement.style.fontSize = '16px';
        } else {
            document.documentElement.style.fontSize = '18px';
        }
    }

    // 15. Add Mobile Performance Monitoring
    function monitorMobilePerformance() {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            const effectiveType = connection.effectiveType;
            
            console.log('Connection Type:', effectiveType);
            
            // Adjust content based on connection
            if (effectiveType === '4g') {
                document.documentElement.classList.add('high-speed');
            } else if (effectiveType === '3g') {
                document.documentElement.classList.add('medium-speed');
            } else {
                document.documentElement.classList.add('low-speed');
            }
        }
    }

    // 16. Optimize Scrolling Performance
    function optimizeScrollingPerformance() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Perform scroll-based optimizations
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // Initialize all mobile optimizations
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                verifyViewportMeta();
                addMobileMetaTags();
                detectMobileDevice();
                optimizeViewportForDevice();
                optimizeTouchTargets();
                optimizeFontSizes();
                preventHorizontalScroll();
                optimizeImagesForMobile();
                optimizeNavigation();
                optimizeFormInputs();
                optimizeTouchEvents();
                optimizeClickAreas();
                addMobileSchema();
                verifyCSSMediaQueries();
                monitorMobilePerformance();
                optimizeScrollingPerformance();
            });
        } else {
            verifyViewportMeta();
            addMobileMetaTags();
            detectMobileDevice();
            optimizeViewportForDevice();
            optimizeTouchTargets();
            optimizeFontSizes();
            preventHorizontalScroll();
            optimizeImagesForMobile();
            optimizeNavigation();
            optimizeFormInputs();
            optimizeTouchEvents();
            optimizeClickAreas();
            addMobileSchema();
            verifyCSSMediaQueries();
            monitorMobilePerformance();
            optimizeScrollingPerformance();
        }
    }

    // Re-optimize on window resize
    window.addEventListener('resize', () => {
        optimizeViewportForDevice();
        optimizeTouchTargets();
        optimizeFontSizes();
        preventHorizontalScroll();
    });

    // Start initialization
    init();
})();
