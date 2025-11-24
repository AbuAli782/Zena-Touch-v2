// ========================================
// SERVICE DATA - استخدام بيانات من portfolio.js
// ========================================

const servicesData = {
    decoration: {
        title: 'الزينة والديكور',
        description: 'نحول بيتك لحلم جميل. ديكور عصري يعكس ذوقك وشخصيتك بأسلوب احترافي.',
        longDescription: 'نقدم لك حلول متكاملة في الديكور والتصميم الداخلي تجمع بين الجمال والعملية. نختار أفضل المواد والألوان اللي تناسب ذوقك. كل مشروع فريد ومخصص حسب احتياجاتك وتصورك.',
        features: [
            { icon: 'decoration-design', title: 'تصاميم عصرية', description: 'أحدث الأفكار الديكورية اللي تواكب الموضة العالمية' },
            { icon: 'decoration-palette', title: 'ألوان متناسقة', description: 'اختيار الألوان المناسبة لمساحتك بدراسة احترافية' },
            { icon: 'decoration-team', title: 'فريق متخصص', description: 'فريقنا محترف وذو خبرة عالية في التصميم الداخلي' },
            { icon: 'decoration-speed', title: 'تنفيذ سريع', description: 'ننهي الشغل في الوقت المحدد بدون تأخير' },
            { icon: 'decoration-price', title: 'أسعار عادلة', description: 'أفضل جودة بأسعار منطقية وشفافة' },
            { icon: 'decoration-guarantee', title: 'ضمان العمل', description: 'ضمان شامل على جودة العمل والمواد' },
        ],
        get media() {
            return portfolioData.filter(item => item.category === 'decoration').map(item => ({
                type: item.type,
                src: item.media
            }));
        }
    },
    electricity: {
        title: 'الكهرباء',
        description: 'كهرباء آمنة وموثوقة. تركيب وصيانة احترافية بأعلى معايير الأمان.',
        longDescription: 'نقدم خدمات كهربائية شاملة بمعايير أمان عالية جداً. فريقنا مرخص ومدرب على أحدث المعايير الدولية. نضمن سلامتك وسلامة عائلتك مع التزام كامل بالمواصفات الكهربائية.',
        features: [
            { icon: 'electricity-plug', title: 'تركيب احترافي', description: 'تركيب كهربائي آمن وموثوق حسب المعايير الدولية' },
            { icon: 'electricity-wrench', title: 'صيانة دورية', description: 'صيانة منتظمة وإصلاح سريع للأعطال' },
            { icon: 'electricity-safety', title: 'معايير الأمان', description: 'التزام كامل بمعايير الأمان والسلامة الكهربائية' },
            { icon: 'electricity-speed', title: 'خدمة سريعة', description: 'نرد على طلباتك الطارئة بسرعة' },
            { icon: 'electricity-energy', title: 'توفير الطاقة', description: 'حلول ذكية لتقليل فاتورة الكهرباء' },
            { icon: 'electricity-support', title: 'دعم 24/7', description: 'فريق الدعم متاح لك طول الوقت' },
        ],
        get media() {
            return portfolioData.filter(item => item.category === 'electricity').map(item => ({
                type: item.type,
                src: item.media
            }));
        }
    },
    plumbing: {
        title: 'السباكة',
        description: 'حل سريع لمشاكل السباكة. تركيب وصيانة احترافية بأسعار عادلة.',
        longDescription: 'نقدم لك خدمات سباكة شاملة من التركيب الجديد للصيانة والإصلاح. فريقنا محترف ويستخدم أحدث الأدوات والتقنيات. نحل مشاكلك بسرعة وكفاءة بأسعار منطقية وشفافة.',
        features: [
            { icon: 'plumbing-repair', title: 'إصلاح سريع', description: 'إصلاح فوري للتسريبات والأعطال' },
            { icon: 'plumbing-pipes', title: 'تركيب أنابيب', description: 'تركيب أنابيب بأعلى جودة ومواد معتمدة' },
            { icon: 'plumbing-cleaning', title: 'تنظيف الأنابيب', description: 'تنظيف وتسليك الأنابيب المسدودة بتقنيات حديثة' },
            { icon: 'plumbing-maintenance', title: 'صيانة دورية', description: 'صيانة منتظمة للأنظمة السباكية' },
            { icon: 'plumbing-guarantee', title: 'ضمان العمل', description: 'ضمان شامل على جميع الأعمال والمواد' },
            { icon: 'plumbing-price', title: 'أسعار عادلة', description: 'أسعار شفافة بدون تكاليف مخفية' },
        ],
        get media() {
            return portfolioData.filter(item => item.category === 'plumbing').map(item => ({
                type: item.type,
                src: item.media
            }));
        }
    }
};

// ========================================
// 3D ICON GENERATOR - أيقونات ثلاثية الأبعاد
// ========================================

const iconGenerator = {
    // Decoration Icons
    'decoration-design': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-design" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-design">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-design)" opacity="0.15" filter="url(#shadow-design)"/>
            <circle cx="50" cy="50" r="40" fill="none" stroke="url(#grad-design)" stroke-width="2" opacity="0.3"/>
            <path d="M 35 35 Q 50 25 65 35 Q 75 45 65 65 Q 50 75 35 65 Q 25 45 35 35" fill="url(#grad-design)" filter="url(#shadow-design)"/>
            <circle cx="50" cy="50" r="8" fill="#FFF" opacity="0.8"/>
        </svg>
    `,
    'decoration-palette': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-palette" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-palette">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <ellipse cx="50" cy="50" rx="42" ry="38" fill="url(#grad-palette)" opacity="0.15" filter="url(#shadow-palette)"/>
            <ellipse cx="50" cy="50" rx="38" ry="34" fill="none" stroke="url(#grad-palette)" stroke-width="2" opacity="0.3"/>
            <circle cx="35" cy="40" r="6" fill="#5E81AC" filter="url(#shadow-palette)"/>
            <circle cx="50" cy="35" r="6" fill="#4A6FA5" filter="url(#shadow-palette)"/>
            <circle cx="65" cy="40" r="6" fill="#3D5A80" filter="url(#shadow-palette)"/>
            <circle cx="40" cy="60" r="6" fill="#6B8FBF" filter="url(#shadow-palette)"/>
            <circle cx="60" cy="60" r="6" fill="#5E81AC" filter="url(#shadow-palette)"/>
            <path d="M 50 70 Q 45 75 50 78 Q 55 75 50 70" fill="url(#grad-palette)" filter="url(#shadow-palette)"/>
        </svg>
    `,
    'decoration-team': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-team" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-team">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-team)" opacity="0.15" filter="url(#shadow-team)"/>
            <circle cx="35" cy="35" r="8" fill="url(#grad-team)" filter="url(#shadow-team)"/>
            <circle cx="65" cy="35" r="8" fill="url(#grad-team)" filter="url(#shadow-team)"/>
            <circle cx="50" cy="28" r="8" fill="url(#grad-team)" filter="url(#shadow-team)"/>
            <path d="M 30 48 Q 35 55 50 58 Q 65 55 70 48" fill="url(#grad-team)" opacity="0.8" filter="url(#shadow-team)"/>
            <circle cx="50" cy="50" r="3" fill="#FFF" opacity="0.6"/>
        </svg>
    `,
    'decoration-speed': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-speed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-speed">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-speed)" opacity="0.15" filter="url(#shadow-speed)"/>
            <path d="M 30 50 L 50 35 L 70 50 L 60 50 L 60 65 L 40 65 L 40 50 Z" fill="url(#grad-speed)" filter="url(#shadow-speed)"/>
            <path d="M 35 55 L 65 55" stroke="url(#grad-speed)" stroke-width="2" opacity="0.5"/>
        </svg>
    `,
    'decoration-price': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-price" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-price">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-price)" opacity="0.15" filter="url(#shadow-price)"/>
            <circle cx="50" cy="50" r="20" fill="url(#grad-price)" filter="url(#shadow-price)"/>
            <path d="M 50 35 L 50 65" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
            <path d="M 42 42 Q 50 40 58 42" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M 42 58 Q 50 60 58 58" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
    `,
    'decoration-guarantee': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-guarantee" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-guarantee">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-guarantee)" opacity="0.15" filter="url(#shadow-guarantee)"/>
            <path d="M 50 25 L 65 35 L 65 55 Q 50 68 50 68 Q 35 55 35 35 Z" fill="url(#grad-guarantee)" filter="url(#shadow-guarantee)"/>
            <path d="M 42 50 L 48 56 L 58 46" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    
    // Electricity Icons
    'electricity-plug': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-plug" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-plug">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-plug)" opacity="0.15" filter="url(#shadow-plug)"/>
            <rect x="42" y="25" width="16" height="25" rx="2" fill="url(#grad-plug)" filter="url(#shadow-plug)"/>
            <circle cx="46" cy="55" r="3" fill="url(#grad-plug)" filter="url(#shadow-plug)"/>
            <circle cx="54" cy="55" r="3" fill="url(#grad-plug)" filter="url(#shadow-plug)"/>
            <path d="M 46 58 L 46 68 M 54 58 L 54 68" stroke="url(#grad-plug)" stroke-width="2" stroke-linecap="round"/>
            <path d="M 40 70 L 60 70" stroke="url(#grad-plug)" stroke-width="3" stroke-linecap="round"/>
        </svg>
    `,
    'electricity-wrench': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-wrench" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-wrench">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-wrench)" opacity="0.15" filter="url(#shadow-wrench)"/>
            <path d="M 30 45 L 55 45 Q 65 45 65 55 Q 65 65 55 65 L 30 65" stroke="url(#grad-wrench)" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#shadow-wrench)"/>
            <circle cx="65" cy="55" r="5" fill="url(#grad-wrench)" filter="url(#shadow-wrench)"/>
        </svg>
    `,
    'electricity-safety': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-safety" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-safety">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-safety)" opacity="0.15" filter="url(#shadow-safety)"/>
            <path d="M 50 25 L 65 35 L 65 55 Q 50 68 50 68 Q 35 55 35 55 L 35 35 Z" fill="url(#grad-safety)" filter="url(#shadow-safety)"/>
            <path d="M 42 50 L 48 56 L 58 46" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    'electricity-speed': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-e-speed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-e-speed">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-e-speed)" opacity="0.15" filter="url(#shadow-e-speed)"/>
            <path d="M 35 60 L 50 30 L 55 45 L 70 40 L 50 70 L 45 55 Z" fill="url(#grad-e-speed)" filter="url(#shadow-e-speed)"/>
        </svg>
    `,
    'electricity-energy': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-energy" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-energy">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-energy)" opacity="0.15" filter="url(#shadow-energy)"/>
            <circle cx="50" cy="50" r="25" fill="none" stroke="url(#grad-energy)" stroke-width="3" filter="url(#shadow-energy)"/>
            <path d="M 50 30 L 50 70 M 30 50 L 70 50" stroke="url(#grad-energy)" stroke-width="2" stroke-linecap="round"/>
            <circle cx="50" cy="50" r="5" fill="url(#grad-energy)" filter="url(#shadow-energy)"/>
        </svg>
    `,
    'electricity-support': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-support" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-support">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-support)" opacity="0.15" filter="url(#shadow-support)"/>
            <path d="M 35 40 Q 35 30 50 30 Q 65 30 65 40 L 65 60 Q 65 70 50 70 Q 35 70 35 60 Z" fill="url(#grad-support)" filter="url(#shadow-support)"/>
            <path d="M 42 50 L 50 58 L 58 50" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    
    // Plumbing Icons
    'plumbing-repair': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-repair" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-repair">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-repair)" opacity="0.15" filter="url(#shadow-repair)"/>
            <circle cx="50" cy="50" r="20" fill="url(#grad-repair)" filter="url(#shadow-repair)"/>
            <path d="M 50 35 L 50 65" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
            <path d="M 35 50 L 65 50" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
        </svg>
    `,
    'plumbing-pipes': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-pipes" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-pipes">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-pipes)" opacity="0.15" filter="url(#shadow-pipes)"/>
            <path d="M 30 40 L 50 40 L 50 60 L 70 60" stroke="url(#grad-pipes)" stroke-width="5" fill="none" stroke-linecap="round" filter="url(#shadow-pipes)"/>
            <circle cx="50" cy="40" r="4" fill="url(#grad-pipes)" filter="url(#shadow-pipes)"/>
            <circle cx="50" cy="60" r="4" fill="url(#grad-pipes)" filter="url(#shadow-pipes)"/>
        </svg>
    `,
    'plumbing-cleaning': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-cleaning" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-cleaning">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-cleaning)" opacity="0.15" filter="url(#shadow-cleaning)"/>
            <path d="M 40 35 L 60 35 Q 65 35 65 40 L 65 60 Q 65 70 50 70 Q 35 70 35 60 L 35 40 Q 35 35 40 35" fill="url(#grad-cleaning)" filter="url(#shadow-cleaning)"/>
            <path d="M 42 45 L 58 45 M 42 55 L 58 55" stroke="#FFF" stroke-width="2" stroke-linecap="round"/>
        </svg>
    `,
    'plumbing-maintenance': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-maintenance" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-maintenance">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-maintenance)" opacity="0.15" filter="url(#shadow-maintenance)"/>
            <path d="M 35 50 Q 35 35 50 35 Q 65 35 65 50 Q 65 65 50 65 Q 35 65 35 50" fill="url(#grad-maintenance)" filter="url(#shadow-maintenance)"/>
            <path d="M 45 45 L 50 50 L 55 45 M 45 55 L 50 50 L 55 55" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    'plumbing-guarantee': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-p-guarantee" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-p-guarantee">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-p-guarantee)" opacity="0.15" filter="url(#shadow-p-guarantee)"/>
            <path d="M 50 25 L 65 35 L 65 55 Q 50 68 50 68 Q 35 55 35 55 L 35 35 Z" fill="url(#grad-p-guarantee)" filter="url(#shadow-p-guarantee)"/>
            <path d="M 42 50 L 48 56 L 58 46" stroke="#FFF" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `,
    'plumbing-price': `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="rotating-icon">
            <defs>
                <linearGradient id="grad-p-price" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#5E81AC;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#3D5A80;stop-opacity:1" />
                </linearGradient>
                <filter id="shadow-p-price">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.3"/>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad-p-price)" opacity="0.15" filter="url(#shadow-p-price)"/>
            <circle cx="50" cy="50" r="20" fill="url(#grad-p-price)" filter="url(#shadow-p-price)"/>
            <path d="M 50 35 L 50 65" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
            <path d="M 42 42 Q 50 40 58 42" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M 42 58 Q 50 60 58 58" stroke="#FFF" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
    `
};

// ========================================
// GET SERVICE FROM URL
// ========================================

function getServiceFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || 'decoration';
}


// ========================================
// LOAD SERVICE CONTENT
// ========================================

function loadServiceContent() {
    const service = getServiceFromURL();
    const serviceData = servicesData[service];

    if (!serviceData) {
        window.location.href = 'index.html';
        return;
    }

    // Load Hero Section
    const heroSection = document.getElementById('serviceHero');
    if (!heroSection) return; // Exit if element doesn't exist
    heroSection.innerHTML = '';
    const heroContent = document.createElement('div');
    heroContent.className = 'service-hero-content';
    
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = serviceData.title;
    
    const heroDesc = document.createElement('p');
    heroDesc.textContent = serviceData.description;
    
    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroDesc);
    heroSection.appendChild(heroContent);

    // Load Description
    const descriptionSection = document.getElementById('serviceDescription');
    if (!descriptionSection) return; // Exit if element doesn't exist
    descriptionSection.innerHTML = '';
    const descContent = document.createElement('div');
    descContent.className = 'description-content';

    const descTitle = document.createElement('h2');
    descTitle.textContent = serviceData.title;

    const introText = document.createElement('p');
    introText.className = 'intro-text';
    introText.textContent = serviceData.description;

    const longText = document.createElement('p');
    longText.className = 'long-text';
    longText.textContent = serviceData.longDescription;

    const descFooter = document.createElement('div');
    descFooter.className = 'description-footer';
    const footerText = document.createElement('p');
    footerText.textContent = 'نحن نقدم خدمات عالية الجودة بأسعار منافسة وفريق محترف يعمل على رضاك التام. اختر خدمتنا واستمتع بالفرق.';
    descFooter.appendChild(footerText);

    descContent.appendChild(descTitle);
    descContent.appendChild(introText);
    descContent.appendChild(longText);
    descContent.appendChild(descFooter);
    descriptionSection.appendChild(descContent);

    // Load Features
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) return; // Exit if element doesn't exist
    featuresGrid.innerHTML = '';
    
    serviceData.features.forEach(feature => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';

        const featureIcon = document.createElement('div');
        featureIcon.className = 'feature-icon';
        
        // استخدام الأيقونات 3D المخصصة
        if (iconGenerator[feature.icon]) {
            featureIcon.innerHTML = iconGenerator[feature.icon];
        } else {
            const icon = document.createElement('i');
            icon.className = feature.icon;
            featureIcon.appendChild(icon);
        }

        const featureTitle = document.createElement('h3');
        featureTitle.textContent = feature.title;

        const featureDesc = document.createElement('p');
        featureDesc.textContent = feature.description;

        featureItem.appendChild(featureIcon);
        featureItem.appendChild(featureTitle);
        featureItem.appendChild(featureDesc);
        featuresGrid.appendChild(featureItem);
    });

    // Load Gallery with proper video and image handling
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return; // Exit if element doesn't exist
    galleryGrid.innerHTML = '';

    serviceData.media.forEach((item, index) => {
        const galleryItem = document.createElement('div');

        if (item.type === 'video') {
            // نفس الطريقة من portfolio.js بالضبط
            galleryItem.className = 'gallery-item video-item';
            galleryItem.innerHTML = `
                <div class="portfolio-video-container">
                    <video controls preload="metadata" style="width: 100%; height: 100%;" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E">
                        <source src="${item.src}" type="video/mp4">
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                </div>
            `;
        } else {
            // الصور مع Lightbox
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <a href="${item.src}" data-lightbox="service-gallery" data-title="${serviceData.title} - ${index + 1}">
                    <img src="${item.src}" alt="${serviceData.title} ${index + 1}" loading="lazy">
                    <div class="image-overlay">
                        <i class="fas fa-expand"></i>
                    </div>
                </a>
            `;
        }

        galleryGrid.appendChild(galleryItem);
    });

    // Add back button to Lightbox
    addLightboxBackButton();

    // Update page title
    document.title = `${serviceData.title} - زينة تاتش`;

    // Reinitialize Lightbox
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'صورة %1 من %2'
        });
    }
}

// ========================================
// ADD BACK BUTTON TO LIGHTBOX
// ========================================

function addLightboxBackButton() {
    // Wait for Lightbox to be ready
    setTimeout(() => {
        const lightboxElements = document.querySelectorAll('[data-lightbox]');
        
        lightboxElements.forEach(element => {
            element.addEventListener('click', () => {
                setTimeout(() => {
                    const lightboxContainer = document.querySelector('.lb-container');
                    if (lightboxContainer) {
                        // Check if back button already exists
                        if (!document.querySelector('.lightbox-back-btn')) {
                            const backButton = document.createElement('button');
                            backButton.className = 'lightbox-back-btn';
                            backButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
                            backButton.title = 'العودة إلى المعرض';
                            backButton.addEventListener('click', (e) => {
                                e.stopPropagation();
                                // Close lightbox
                                const closeButton = document.querySelector('.lb-close');
                                if (closeButton) {
                                    closeButton.click();
                                }
                            });
                            
                            const lightboxNav = document.querySelector('.lb-nav');
                            if (lightboxNav) {
                                lightboxNav.appendChild(backButton);
                            }
                        }
                    }
                }, 100);
            });
        });
    }, 500);
}

// ========================================
// FORM SUBMISSION
// ========================================

function initializeForm() {
    const form = document.getElementById('serviceForm');
    if (!form) return; // Exit if form doesn't exist
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const service = getServiceFromURL();

        // إنشء رسالة WhatsApp
        const whatsappMessage = `
*طلب خدمة جديد من موقع زينة تاتش*

👤 *الاسم:* ${name}
📱 *الجوال:* ${phone}
📧 *البريد الإلكتروني:* ${email}
🔧 *الخدمة المطلوبة:* ${getServiceName(service)}
💬 *الرسالة:*
${message}

---
تم الإرسال من موقع زينة تاتش
`;

        // رقم WhatsApp (رقم الشركة)
        const whatsappNumber = '966551234567'; // استبدل برقمك
        
        // إنشاء رابط WhatsApp
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // فتح WhatsApp
        window.open(whatsappUrl, '_blank');

        // عرض رسالة نجاح
        alert('شكراً لك! سيتم فتح WhatsApp لإرسال طلبك.');
        form.reset();

        // Log to console (for debugging)
        console.log('WhatsApp Message:', whatsappMessage);
    });
}

// دالة للحصول على اسم الخدمة
function getServiceName(service) {
    const services = {
        'decoration': 'الزينة والديكور',
        'electricity': 'الكهرباء',
        'plumbing': 'السباكة'
    };
    return services[service] || service;
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// ========================================
// INITIALIZE ALL
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadServiceContent();
    initializeForm();
    initializeMobileMenu();
});
