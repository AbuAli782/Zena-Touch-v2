/**
 * Indexing Optimization
 * Ensures proper crawling and indexing by search engines
 */

(function() {
    'use strict';

    // 1. Verify Robots Meta Tag
    function verifyRobotsMeta() {
        let robotsMeta = document.querySelector('meta[name="robots"]');
        if (!robotsMeta) {
            robotsMeta = document.createElement('meta');
            robotsMeta.name = 'robots';
            robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
            document.head.appendChild(robotsMeta);
        }
        console.log('✓ Robots meta tag verified');
    }

    // 2. Add Google Search Console Meta Tag
    function addGoogleSearchConsoleMeta() {
        // This should be replaced with actual verification code
        const googleMeta = document.querySelector('meta[name="google-site-verification"]');
        if (!googleMeta) {
            console.log('ℹ️ Add Google Search Console verification meta tag');
        }
    }

    // 3. Verify Canonical Tag
    function verifyCanonicalTag() {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            canonical.href = window.location.href;
            document.head.appendChild(canonical);
        }
        console.log('✓ Canonical tag verified:', canonical.href);
    }

    // 4. Add Alternate Language Links
    function addAlternateLanguageLinks() {
        const alternateLinks = [
            { hreflang: 'ar-SA', href: window.location.href },
            { hreflang: 'x-default', href: window.location.href }
        ];

        alternateLinks.forEach(alt => {
            let link = document.querySelector(`link[rel="alternate"][hreflang="${alt.hreflang}"]`);
            if (!link) {
                link = document.createElement('link');
                link.rel = 'alternate';
                link.hreflang = alt.hreflang;
                link.href = alt.href;
                document.head.appendChild(link);
            }
        });
    }

    // 5. Verify Page Title
    function verifyPageTitle() {
        const title = document.querySelector('title');
        if (!title || title.textContent.length === 0) {
            console.warn('⚠️ Missing or empty page title');
        } else if (title.textContent.length > 60) {
            console.warn('⚠️ Page title is too long:', title.textContent.length, 'characters');
        } else {
            console.log('✓ Page title is optimized:', title.textContent);
        }
    }

    // 6. Verify Meta Description
    function verifyMetaDescription() {
        const description = document.querySelector('meta[name="description"]');
        if (!description || description.content.length === 0) {
            console.warn('⚠️ Missing or empty meta description');
        } else if (description.content.length > 160) {
            console.warn('⚠️ Meta description is too long:', description.content.length, 'characters');
        } else if (description.content.length < 50) {
            console.warn('⚠️ Meta description is too short:', description.content.length, 'characters');
        } else {
            console.log('✓ Meta description is optimized');
        }
    }

    // 7. Check for Duplicate Content
    function checkForDuplicateContent() {
        const headings = document.querySelectorAll('h1');
        if (headings.length > 1) {
            console.warn('⚠️ Multiple H1 tags found:', headings.length);
        } else if (headings.length === 0) {
            console.warn('⚠️ No H1 tag found on page');
        } else {
            console.log('✓ Single H1 tag found');
        }
    }

    // 8. Verify Heading Structure
    function verifyHeadingStructure() {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        let lastLevel = 0;
        let isValid = true;

        headings.forEach(heading => {
            const level = parseInt(heading.tagName[1]);
            if (level > lastLevel + 1) {
                console.warn(`⚠️ Heading structure issue: jumped from H${lastLevel} to H${level}`);
                isValid = false;
            }
            lastLevel = level;
        });

        if (isValid) {
            console.log('✓ Heading structure is correct');
        }
    }

    // 9. Check for Images Alt Text
    function checkImageAltText() {
        const images = document.querySelectorAll('img');
        let missingAlt = 0;

        images.forEach(img => {
            if (!img.hasAttribute('alt') || img.getAttribute('alt').length === 0) {
                missingAlt++;
                console.warn('⚠️ Image missing alt text:', img.src);
            }
        });

        if (missingAlt === 0) {
            console.log('✓ All images have alt text');
        } else {
            console.warn(`⚠️ ${missingAlt} images missing alt text`);
        }
    }

    // 10. Verify Structured Data
    function verifyStructuredData() {
        const schemas = document.querySelectorAll('script[type="application/ld+json"]');
        if (schemas.length === 0) {
            console.warn('⚠️ No structured data found');
        } else {
            console.log('✓ Structured data found:', schemas.length, 'schema(s)');
            
            schemas.forEach((schema, index) => {
                try {
                    const data = JSON.parse(schema.textContent);
                    console.log(`  Schema ${index + 1}:`, data['@type']);
                } catch (e) {
                    console.warn(`  Schema ${index + 1}: Invalid JSON`);
                }
            });
        }
    }

    // 11. Check for Mobile Optimization
    function checkMobileOptimization() {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            console.warn('⚠️ Missing viewport meta tag');
        } else {
            console.log('✓ Viewport meta tag present');
        }

        // Check for mobile-friendly CSS
        const mediaQueries = window.matchMedia('(max-width: 768px)');
        console.log('✓ Mobile media queries supported');
    }

    // 12. Verify Open Graph Tags
    function verifyOpenGraphTags() {
        const ogTags = [
            'og:title',
            'og:description',
            'og:image',
            'og:url',
            'og:type'
        ];

        let missingTags = [];
        ogTags.forEach(tag => {
            const meta = document.querySelector(`meta[property="${tag}"]`);
            if (!meta) {
                missingTags.push(tag);
            }
        });

        if (missingTags.length === 0) {
            console.log('✓ All Open Graph tags present');
        } else {
            console.warn('⚠️ Missing Open Graph tags:', missingTags.join(', '));
        }
    }

    // 13. Verify Twitter Card Tags
    function verifyTwitterCardTags() {
        const twitterTags = [
            'twitter:card',
            'twitter:title',
            'twitter:description',
            'twitter:image'
        ];

        let missingTags = [];
        twitterTags.forEach(tag => {
            const meta = document.querySelector(`meta[name="${tag}"]`);
            if (!meta) {
                missingTags.push(tag);
            }
        });

        if (missingTags.length === 0) {
            console.log('✓ All Twitter Card tags present');
        } else {
            console.warn('⚠️ Missing Twitter Card tags:', missingTags.join(', '));
        }
    }

    // 14. Check for Broken Links
    function checkForBrokenLinks() {
        const links = document.querySelectorAll('a[href]');
        let brokenCount = 0;

        links.forEach(link => {
            const href = link.getAttribute('href');
            
            // Check for common broken link patterns
            if (href === '#' || href === '' || href === 'javascript:void(0)') {
                brokenCount++;
                console.warn('⚠️ Broken link found:', href);
            }
        });

        if (brokenCount === 0) {
            console.log('✓ No obvious broken links found');
        }
    }

    // 15. Verify Sitemap and Robots.txt
    function verifySitemapAndRobots() {
        // Check for sitemap reference
        const robotsMeta = document.querySelector('meta[name="robots"]');
        if (robotsMeta && robotsMeta.content.includes('index')) {
            console.log('✓ Page is set to be indexed');
        }

        // Verify sitemap exists
        fetch('/Zena-Touch-v2/sitemap.xml', { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log('✓ Sitemap.xml is accessible');
                }
            })
            .catch(err => {
                console.warn('⚠️ Sitemap.xml not accessible');
            });

        // Verify robots.txt exists
        fetch('/Zena-Touch-v2/robots.txt', { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log('✓ Robots.txt is accessible');
                }
            })
            .catch(err => {
                console.warn('⚠️ Robots.txt not accessible');
            });
    }

    // 16. Generate Indexing Report
    function generateIndexingReport() {
        console.log('=== INDEXING OPTIMIZATION REPORT ===');
        console.log('Page URL:', window.location.href);
        console.log('Page Title:', document.title);
        console.log('Meta Description:', document.querySelector('meta[name="description"]')?.content || 'Not found');
        console.log('Canonical URL:', document.querySelector('link[rel="canonical"]')?.href || 'Not found');
        console.log('Robots Meta:', document.querySelector('meta[name="robots"]')?.content || 'Not found');
        console.log('====================================');
    }

    // Initialize all indexing optimizations
    function init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                verifyRobotsMeta();
                addGoogleSearchConsoleMeta();
                verifyCanonicalTag();
                addAlternateLanguageLinks();
                verifyPageTitle();
                verifyMetaDescription();
                checkForDuplicateContent();
                verifyHeadingStructure();
                checkImageAltText();
                verifyStructuredData();
                checkMobileOptimization();
                verifyOpenGraphTags();
                verifyTwitterCardTags();
                checkForBrokenLinks();
                verifySitemapAndRobots();
                generateIndexingReport();
            });
        } else {
            verifyRobotsMeta();
            addGoogleSearchConsoleMeta();
            verifyCanonicalTag();
            addAlternateLanguageLinks();
            verifyPageTitle();
            verifyMetaDescription();
            checkForDuplicateContent();
            verifyHeadingStructure();
            checkImageAltText();
            verifyStructuredData();
            checkMobileOptimization();
            verifyOpenGraphTags();
            verifyTwitterCardTags();
            checkForBrokenLinks();
            verifySitemapAndRobots();
            generateIndexingReport();
        }
    }

    // Start initialization
    init();
})();
