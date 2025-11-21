// ========================================
// SMART STICKY HEADER
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    let lastScrollTop = 0;

    // Smart Header Scroll Effect
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollTop = scrollTop;
    });

    // Smooth Scroll to Sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.querySelector('.nav-links');
                    if (mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                }
            }
        });
    });

    // Highlight Active Section
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
