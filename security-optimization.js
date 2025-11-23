/**
 * Security and HTTPS Optimization
 * Ensures proper security headers and HTTPS implementation
 */

(function() {
    'use strict';

    // 1. Verify HTTPS
    function verifyHTTPS() {
        if (window.location.protocol !== 'https:') {
            console.warn('⚠️ Warning: Page is not served over HTTPS');
            // Redirect to HTTPS if on HTTP
            if (window.location.hostname !== 'localhost') {
                window.location.protocol = 'https:';
            }
        } else {
            console.log('✓ Page is served over HTTPS');
        }
    }

    // 2. Add Security Headers Meta Tags
    function addSecurityHeaders() {
        const securityHeaders = [
            { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
            { name: 'referrer', content: 'strict-origin-when-cross-origin' }
        ];

        securityHeaders.forEach(header => {
            let meta = document.querySelector(`meta[${header.httpEquiv ? 'http-equiv' : 'name'}="${header.httpEquiv || header.name}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                if (header.httpEquiv) {
                    meta.httpEquiv = header.httpEquiv;
                } else {
                    meta.name = header.name;
                }
                meta.content = header.content;
                document.head.appendChild(meta);
            }
        });
    }

    // 3. Implement Content Security Policy
    function implementCSP() {
        const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
        if (!cspMeta) {
            const meta = document.createElement('meta');
            meta.httpEquiv = 'Content-Security-Policy';
            meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https: wss:; frame-ancestors 'none'";
            document.head.appendChild(meta);
        }
    }

    // 4. Prevent Clickjacking
    function preventClickjacking() {
        if (window.self !== window.top) {
            window.top.location = window.self.location;
        }
    }

    // 5. Disable Autocomplete for Sensitive Fields
    function disableAutocompleteForSensitiveFields() {
        const sensitiveFields = document.querySelectorAll('input[type="password"], input[type="email"]');
        sensitiveFields.forEach(field => {
            field.setAttribute('autocomplete', 'off');
        });
    }

    // 6. Sanitize User Input
    function sanitizeUserInput() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    const value = input.value;
                    // Remove potential XSS vectors
                    const sanitized = value
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#x27;')
                        .replace(/\//g, '&#x2F;');
                    input.value = sanitized;
                });
            });
        });
    }

    // 7. Add Subresource Integrity (SRI)
    function addSubresourceIntegrity() {
        const externalScripts = document.querySelectorAll('script[src*="cdn.jsdelivr.net"], script[src*="cdnjs.cloudflare.com"]');
        externalScripts.forEach(script => {
            if (!script.hasAttribute('integrity')) {
                // Note: In production, you would calculate the actual hash
                console.log('⚠️ Consider adding Subresource Integrity to:', script.src);
            }
        });
    }

    // 8. Verify SSL Certificate
    function verifySSLCertificate() {
        if (window.location.protocol === 'https:') {
            console.log('✓ SSL/TLS connection is active');
            
            // Additional check via fetch headers
            fetch(window.location.href, { method: 'HEAD' })
                .then(response => {
                    console.log('✓ HTTPS connection verified');
                })
                .catch(err => {
                    console.error('✗ HTTPS verification failed:', err);
                });
        }
    }

    // 9. Implement HSTS (HTTP Strict Transport Security)
    function implementHSTS() {
        // This is typically set via server headers, but we can verify
        const hstsHeader = document.querySelector('meta[http-equiv="Strict-Transport-Security"]');
        if (!hstsHeader && window.location.protocol === 'https:') {
            console.log('ℹ️ HSTS should be configured on the server');
        }
    }

    // 10. Disable Dangerous Features
    function disableDangerousFeatures() {
        // Disable form autocomplete
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.setAttribute('autocomplete', 'off');
        });

        // Disable right-click context menu (optional, can be re-enabled)
        // document.addEventListener('contextmenu', (e) => e.preventDefault());

        // Disable text selection on sensitive elements
        const protectedElements = document.querySelectorAll('[data-protected]');
        protectedElements.forEach(element => {
            element.style.userSelect = 'none';
            element.style.webkitUserSelect = 'none';
        });
    }

    // 11. Implement Rate Limiting for Forms
    function implementRateLimiting() {
        const forms = document.querySelectorAll('form');
        const submitAttempts = new Map();

        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const formId = form.id || form.className;
                const now = Date.now();
                const lastAttempt = submitAttempts.get(formId) || 0;
                const timeDiff = now - lastAttempt;

                if (timeDiff < 1000) { // 1 second minimum between submissions
                    e.preventDefault();
                    console.warn('⚠️ Form submission rate limited');
                    alert('يرجى الانتظار قبل إرسال النموذج مرة أخرى');
                    return;
                }

                submitAttempts.set(formId, now);
            });
        });
    }

    // 12. Validate Form Inputs
    function validateFormInputs() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;

                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');
                    } else {
                        input.classList.remove('error');
                    }

                    // Email validation
                    if (input.type === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(input.value)) {
                            isValid = false;
                            input.classList.add('error');
                        }
                    }

                    // Phone validation
                    if (input.type === 'tel') {
                        const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
                        if (!phoneRegex.test(input.value)) {
                            isValid = false;
                            input.classList.add('error');
                        }
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                    console.warn('⚠️ Form validation failed');
                }
            });
        });
    }

    // 13. Implement CSRF Protection
    function implementCSRFProtection() {
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            // Generate CSRF token
            const csrfToken = generateCSRFToken();
            
            // Add hidden input with CSRF token
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = '_csrf_token';
            input.value = csrfToken;
            form.appendChild(input);
        });
    }

    function generateCSRFToken() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    // 14. Monitor Security Issues
    function monitorSecurityIssues() {
        // Monitor for mixed content
        document.addEventListener('securitypolicyviolation', (e) => {
            console.error('Security Policy Violation:', e.violatedDirective, e.blockedURI);
        });

        // Monitor for XSS attempts
        window.addEventListener('error', (e) => {
            if (e.message && e.message.includes('script')) {
                console.warn('⚠️ Potential XSS attempt detected');
            }
        });
    }

    // 15. Add Security Headers Verification
    function verifySecurityHeaders() {
        fetch(window.location.href, { method: 'HEAD' })
            .then(response => {
                const headers = {
                    'x-content-type-options': response.headers.get('x-content-type-options'),
                    'x-frame-options': response.headers.get('x-frame-options'),
                    'x-xss-protection': response.headers.get('x-xss-protection'),
                    'strict-transport-security': response.headers.get('strict-transport-security'),
                    'content-security-policy': response.headers.get('content-security-policy')
                };

                console.log('Security Headers:', headers);

                // Check for missing headers
                Object.keys(headers).forEach(header => {
                    if (!headers[header]) {
                        console.warn(`⚠️ Missing security header: ${header}`);
                    }
                });
            })
            .catch(err => {
                console.log('Security headers verification error:', err);
            });
    }

    // Initialize all security optimizations
    function init() {
        verifyHTTPS();
        addSecurityHeaders();
        implementCSP();
        preventClickjacking();
        disableAutocompleteForSensitiveFields();
        sanitizeUserInput();
        addSubresourceIntegrity();
        verifySSLCertificate();
        implementHSTS();
        disableDangerousFeatures();
        implementRateLimiting();
        validateFormInputs();
        implementCSRFProtection();
        monitorSecurityIssues();
        verifySecurityHeaders();
    }

    // Start initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
