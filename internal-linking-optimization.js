/**
 * Internal Linking Optimization
 * Improves internal link structure and SEO value distribution
 */

(function() {
    'use strict';

    // 1. Add Contextual Internal Links
    function addContextualInternalLinks() {
        const internalLinkMap = {
            'ديكور': '/Zena-Touch-v2/service-detail.html?service=decoration',
            'كهرباء': '/Zena-Touch-v2/service-detail.html?service=electricity',
            'سباكة': '/Zena-Touch-v2/service-detail.html?service=plumbing',
            'معرض': '/Zena-Touch-v2/portfolio.html',
            'اتصل': '/Zena-Touch-v2/contact.html',
            'خدمات': '/Zena-Touch-v2/service-detail.html'
        };

        // Scan content for keywords and add links
        const contentElements = document.querySelectorAll('p, h2, h3, h4, li');
        contentElements.forEach(element => {
            let html = element.innerHTML;
            let modified = false;

            Object.keys(internalLinkMap).forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b(?!.*<\\/a>)`, 'gi');
                if (regex.test(html) && !html.includes(`href="${internalLinkMap[keyword]}"`)) {
                    html = html.replace(regex, `<a href="${internalLinkMap[keyword]}" title="${keyword}">${keyword}</a>`);
                    modified = true;
                }
            });

            if (modified) {
                element.innerHTML = html;
            }
        });
    }

    // 2. Add Breadcrumb Navigation
    function addBreadcrumbNavigation() {
        const breadcrumbContainer = document.querySelector('.breadcrumb');
        if (!breadcrumbContainer) {
            const breadcrumb = document.createElement('nav');
            breadcrumb.className = 'breadcrumb';
            breadcrumb.setAttribute('aria-label', 'Breadcrumb');
            
            const currentPage = document.title;
            let breadcrumbHTML = '<ol>';
            breadcrumbHTML += '<li><a href="/Zena-Touch-v2/">الرئيسية</a></li>';
            
            if (window.location.pathname.includes('portfolio')) {
                breadcrumbHTML += '<li><a href="/Zena-Touch-v2/portfolio.html">معرض الأعمال</a></li>';
            } else if (window.location.pathname.includes('contact')) {
                breadcrumbHTML += '<li><a href="/Zena-Touch-v2/contact.html">اتصل بنا</a></li>';
            } else if (window.location.pathname.includes('service')) {
                breadcrumbHTML += '<li><a href="/Zena-Touch-v2/service-detail.html">الخدمات</a></li>';
            }
            
            breadcrumbHTML += '</ol>';
            breadcrumb.innerHTML = breadcrumbHTML;
            
            // Insert after header
            const header = document.querySelector('header') || document.querySelector('.navbar');
            if (header) {
                header.insertAdjacentElement('afterend', breadcrumb);
            }
        }
    }

    // 3. Optimize Navigation Links
    function optimizeNavigationLinks() {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            // Ensure all navigation links have proper titles
            if (!link.hasAttribute('title')) {
                link.setAttribute('title', link.textContent);
            }
            
            // Add rel attributes for external links
            if (link.hostname && link.hostname !== window.location.hostname) {
                link.setAttribute('rel', 'noopener noreferrer');
                link.setAttribute('target', '_blank');
            }
        });
    }

    // 4. Add Related Content Links
    function addRelatedContentLinks() {
        const currentService = new URLSearchParams(window.location.search).get('service');
        
        if (currentService) {
            const relatedServices = {
                'decoration': ['electricity', 'plumbing'],
                'electricity': ['decoration', 'plumbing'],
                'plumbing': ['decoration', 'electricity']
            };

            const related = relatedServices[currentService] || [];
            
            if (related.length > 0) {
                const relatedSection = document.createElement('section');
                relatedSection.className = 'related-services';
                relatedSection.innerHTML = '<h3>خدمات ذات صلة</h3><ul>';
                
                related.forEach(service => {
                    const serviceNames = {
                        'decoration': 'الزينة والديكور',
                        'electricity': 'الكهرباء والإضاءة',
                        'plumbing': 'السباكة والصيانة'
                    };
                    
                    relatedSection.innerHTML += `<li><a href="/Zena-Touch-v2/service-detail.html?service=${service}">${serviceNames[service]}</a></li>`;
                });
                
                relatedSection.innerHTML += '</ul>';
                
                const serviceContent = document.querySelector('.service-content');
                if (serviceContent) {
                    serviceContent.appendChild(relatedSection);
                }
            }
        }
    }

    // 5. Add "Back to Top" Link
    function addBackToTopLink() {
        const backToTop = document.createElement('a');
        backToTop.id = 'back-to-top';
        backToTop.href = '#top';
        backToTop.title = 'العودة للأعلى';
        backToTop.innerHTML = '↑ العودة للأعلى';
        backToTop.className = 'back-to-top';
        backToTop.style.display = 'none';
        backToTop.style.position = 'fixed';
        backToTop.style.bottom = '20px';
        backToTop.style.right = '20px';
        backToTop.style.zIndex = '999';
        backToTop.style.padding = '10px 15px';
        backToTop.style.backgroundColor = '#3A506B';
        backToTop.style.color = '#fff';
        backToTop.style.borderRadius = '50px';
        backToTop.style.textDecoration = 'none';
        backToTop.style.cursor = 'pointer';
        
        document.body.appendChild(backToTop);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 6. Add Anchor Links for Sections
    function addAnchorLinks() {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const heading = section.querySelector('h1, h2, h3');
            if (heading && !heading.querySelector('a')) {
                const anchor = document.createElement('a');
                anchor.href = `#${section.id}`;
                anchor.className = 'section-anchor';
                anchor.title = `رابط لـ ${heading.textContent}`;
                anchor.innerHTML = '🔗';
                anchor.style.marginRight = '10px';
                anchor.style.opacity = '0.5';
                anchor.style.textDecoration = 'none';
                heading.insertBefore(anchor, heading.firstChild);
            }
        });
    }

    // 7. Optimize Footer Links
    function optimizeFooterLinks() {
        const footer = document.querySelector('footer');
        if (footer) {
            const footerLinks = footer.querySelectorAll('a');
            footerLinks.forEach(link => {
                // Ensure footer links have proper structure
                if (!link.hasAttribute('title')) {
                    link.setAttribute('title', link.textContent);
                }
            });
        }
    }

    // 8. Add Sitemap Link in Footer
    function addSitemapLink() {
        const footer = document.querySelector('footer');
        if (footer && !footer.querySelector('a[href*="sitemap"]')) {
            const sitemapLink = document.createElement('a');
            sitemapLink.href = '/Zena-Touch-v2/sitemap.xml';
            sitemapLink.textContent = 'خريطة الموقع';
            sitemapLink.title = 'خريطة الموقع';
            sitemapLink.style.display = 'block';
            sitemapLink.style.marginTop = '10px';
            
            const footerBottom = footer.querySelector('.footer-bottom');
            if (footerBottom) {
                footerBottom.appendChild(sitemapLink);
            }
        }
    }

    // 9. Add Robots.txt Link
    function addRobotsLink() {
        const footer = document.querySelector('footer');
        if (footer && !footer.querySelector('a[href*="robots"]')) {
            const robotsLink = document.createElement('a');
            robotsLink.href = '/Zena-Touch-v2/robots.txt';
            robotsLink.textContent = 'ملف Robots';
            robotsLink.title = 'ملف Robots.txt';
            robotsLink.style.display = 'block';
            robotsLink.style.marginTop = '5px';
            
            const footerBottom = footer.querySelector('.footer-bottom');
            if (footerBottom) {
                footerBottom.appendChild(robotsLink);
            }
        }
    }

    // 10. Track Internal Link Clicks
    function trackInternalLinkClicks() {
        const internalLinks = document.querySelectorAll('a[href*="/Zena-Touch-v2/"]');
        internalLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.gtag) {
                    window.gtag('event', 'internal_link_click', {
                        'link_url': this.href,
                        'link_text': this.textContent
                    });
                }
            });
        });
    }

    // 11. Add Link Prefetching
    function addLinkPrefetching() {
        const importantLinks = [
            '/Zena-Touch-v2/service-detail.html?service=decoration',
            '/Zena-Touch-v2/service-detail.html?service=electricity',
            '/Zena-Touch-v2/service-detail.html?service=plumbing',
            '/Zena-Touch-v2/portfolio.html',
            '/Zena-Touch-v2/contact.html'
        ];

        importantLinks.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = url;
            document.head.appendChild(link);
        });
    }

    // 12. Verify Link Structure
    function verifyLinkStructure() {
        const allLinks = document.querySelectorAll('a[href]');
        let brokenLinks = 0;
        let externalLinks = 0;
        let internalLinks = 0;

        allLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('http') && !href.includes(window.location.hostname)) {
                externalLinks++;
            } else if (href.startsWith('/') || href.includes('.html')) {
                internalLinks++;
            } else if (href === '#' || href === '') {
                brokenLinks++;
            }
        });

        console.log('Link Structure Analysis:');
        console.log('Internal Links:', internalLinks);
        console.log('External Links:', externalLinks);
        console.log('Broken/Empty Links:', brokenLinks);
    }

    // 13. Add Nofollow to External Links
    function addNofollowToExternalLinks() {
        const externalLinks = document.querySelectorAll('a[href^="http"]');
        externalLinks.forEach(link => {
            if (!link.hostname.includes(window.location.hostname)) {
                link.setAttribute('rel', 'nofollow noopener noreferrer');
            }
        });
    }

    // Initialize all optimizations
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                addContextualInternalLinks();
                addBreadcrumbNavigation();
                optimizeNavigationLinks();
                addRelatedContentLinks();
                addBackToTopLink();
                addAnchorLinks();
                optimizeFooterLinks();
                addSitemapLink();
                addRobotsLink();
                trackInternalLinkClicks();
                addLinkPrefetching();
                verifyLinkStructure();
                addNofollowToExternalLinks();
            });
        } else {
            addContextualInternalLinks();
            addBreadcrumbNavigation();
            optimizeNavigationLinks();
            addRelatedContentLinks();
            addBackToTopLink();
            addAnchorLinks();
            optimizeFooterLinks();
            addSitemapLink();
            addRobotsLink();
            trackInternalLinkClicks();
            addLinkPrefetching();
            verifyLinkStructure();
            addNofollowToExternalLinks();
        }
    }

    // Start initialization
    init();
})();
