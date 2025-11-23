// ========================================
// FORM SUBMISSION
// ========================================

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName')?.value || document.getElementById('name')?.value;
        const email = document.getElementById('contactEmail')?.value || document.getElementById('email')?.value;
        const phone = document.getElementById('contactPhone')?.value || document.getElementById('phone')?.value;
        const message = document.getElementById('contactMessage')?.value || document.getElementById('message')?.value;

        // إنشء رسالة WhatsApp
        const whatsappMessage = `
*رسالة جديدة من موقع زينة تاتش*

👤 *الاسم:* ${name}
📱 *الجوال:* ${phone}
📧 *البريد الإلكتروني:* ${email}
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
        alert('شكراً لك! سيتم فتح WhatsApp لإرسال رسالتك.');
        form.reset();

        // Log to console (for debugging)
        console.log('WhatsApp Message:', whatsappMessage);
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function initializeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
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
    initializeContactForm();
    initializeMobileMenu();
});
