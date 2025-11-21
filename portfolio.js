// ========================================
// PORTFOLIO DATA
// ========================================

const portfolioData = [
    // Decoration Images
    { id: 1, category: 'decoration', media: 'images/Decoration_Photos/IMG1.jpg', type: 'image', title: 'ديكور حديث' },
    { id: 2, category: 'decoration', media: 'images/Decoration_Photos/IMG2.jpg', type: 'image', title: 'تصميم عصري' },
    { id: 3, category: 'decoration', media: 'images/Decoration_Photos/IMG3.jpg', type: 'image', title: 'ديكور فاخر' },
    { id: 4, category: 'decoration', media: 'images/Decoration_Photos/IMG4.jpg', type: 'image', title: 'تصميم مميز' },
    { id: 5, category: 'decoration', media: 'images/Decoration_Photos/IMG5.jpg', type: 'image', title: 'ديكور متقن' },
    { id: 6, category: 'decoration', media: 'images/Decoration_Photos/IMG6.jpg', type: 'image', title: 'ديكور أنيق' },
    { id: 7, category: 'decoration', media: 'images/Decoration_Photos/IMG7.jpg', type: 'image', title: 'تصميم فريد' },
    { id: 8, category: 'decoration', media: 'images/Decoration_Photos/IMG8.jpg', type: 'image', title: 'ديكور راقي' },
    { id: 9, category: 'decoration', media: 'images/Decoration_Photos/IMG9.jpg', type: 'image', title: 'ديكور مميز' },
    { id: 10, category: 'decoration', media: 'images/Decoration_Photos/IMG10.jpg', type: 'image', title: 'تصميم جميل' },
    { id: 11, category: 'decoration', media: 'images/Decoration_Photos/IMG11.jpg', type: 'image', title: 'ديكور فخم' },
    { id: 12, category: 'decoration', media: 'images/Decoration_Photos/IMG12.jpg', type: 'image', title: 'تصميم عالي الجودة' },
    { id: 13, category: 'decoration', media: 'images/Decoration_Photos/IMG13.jpg', type: 'image', title: 'ديكور متناسق' },
    { id: 14, category: 'decoration', media: 'images/Decoration_Photos/IMG14.jpg', type: 'image', title: 'تصميم احترافي' },
    { id: 15, category: 'decoration', media: 'images/Decoration_Photos/IMG15.jpg', type: 'image', title: 'ديكور أنيق' },
    { id: 16, category: 'decoration', media: 'images/Decoration_Photos/IMG16.jpg', type: 'image', title: 'تصميم حديث' },
    { id: 17, category: 'decoration', media: 'images/Decoration_Photos/IMG17.jpg', type: 'image', title: 'ديكور راقي' },
    { id: 18, category: 'decoration', media: 'images/Decoration_Photos/IMG18.jpg', type: 'image', title: 'تصميم متقن' },
    { id: 19, category: 'decoration', media: 'images/Decoration_Photos/IMG19.jpg', type: 'image', title: 'ديكور فريد' },
    { id: 20, category: 'decoration', media: 'images/Decoration_Photos/IMG20.jpg', type: 'image', title: 'تصميم مميز' },
    { id: 21, category: 'decoration', media: 'images/Decoration_Photos/IMG21.jpg', type: 'image', title: 'ديكور جميل' },
    { id: 22, category: 'decoration', media: 'images/Decoration_Photos/IMG22.jpg', type: 'image', title: 'تصميم عصري' },
    { id: 23, category: 'decoration', media: 'images/Decoration_Photos/IMG23.jpg', type: 'image', title: 'ديكور متناسق' },
    { id: 24, category: 'decoration', media: 'images/Decoration_Photos/IMG24.jpg', type: 'image', title: 'تصميم احترافي' },
    { id: 25, category: 'decoration', media: 'images/Decoration_Photos/IMG25.jpg', type: 'image', title: 'ديكور فاخر' },
    { id: 26, category: 'decoration', media: 'images/Decoration_Photos/IMG26.jpg', type: 'image', title: 'تصميم فريد' },
    { id: 27, category: 'decoration', media: 'images/Decoration_Photos/IMG-20251114-WA0050.jpg', type: 'image', title: 'ديكور متقن' },
    { id: 28, category: 'decoration', media: 'images/Decoration_Photos/IMG-20251117-WA0014.jpg', type: 'image', title: 'تصميم جميل' },
    { id: 29, category: 'decoration', media: 'images/Decoration_Photos/IMG-20251117-WA0015.jpg', type: 'image', title: 'ديكور أنيق' },
    
    // Decoration Videos
    { id: 30, category: 'decoration', media: 'images/Decoration_Photos/VID1.mp4', type: 'video', title: 'فيديو ديكور 1' },
    { id: 31, category: 'decoration', media: 'images/Decoration_Photos/VID2.mp4', type: 'video', title: 'فيديو ديكور 2' },
    { id: 32, category: 'decoration', media: 'images/Decoration_Photos/VID3.mp4', type: 'video', title: 'فيديو ديكور 3' },
    { id: 33, category: 'decoration', media: 'images/Decoration_Photos/VID4.mp4', type: 'video', title: 'فيديو ديكور 4' },
    { id: 34, category: 'decoration', media: 'images/Decoration_Photos/VID5.mp4', type: 'video', title: 'فيديو ديكور 5' },
    { id: 35, category: 'decoration', media: 'images/Decoration_Photos/VID6.mp4', type: 'video', title: 'فيديو ديكور 6' },
    { id: 36, category: 'decoration', media: 'images/Decoration_Photos/VID7.mp4', type: 'video', title: 'فيديو ديكور 7' },
    { id: 37, category: 'decoration', media: 'images/Decoration_Photos/VID8.mp4', type: 'video', title: 'فيديو ديكور 8' },
    { id: 38, category: 'decoration', media: 'images/Decoration_Photos/VID9.mp4', type: 'video', title: 'فيديو ديكور 9' },
    { id: 39, category: 'decoration', media: 'images/Decoration_Photos/VID10.mp4', type: 'video', title: 'فيديو ديكور 10' },
    
    // Electricity Images
    { id: 40, category: 'electricity', media: 'images/Electricity_Photos/IMG1.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 41, category: 'electricity', media: 'images/Electricity_Photos/IMG2.jpg', type: 'image', title: 'صيانة كهربائية' },
    { id: 42, category: 'electricity', media: 'images/Electricity_Photos/IMG3.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 43, category: 'electricity', media: 'images/Electricity_Photos/IMG4.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 44, category: 'electricity', media: 'images/Electricity_Photos/IMG5.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 45, category: 'electricity', media: 'images/Electricity_Photos/IMG6.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 46, category: 'electricity', media: 'images/Electricity_Photos/IMG7.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 47, category: 'electricity', media: 'images/Electricity_Photos/IMG8.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 48, category: 'electricity', media: 'images/Electricity_Photos/IMG9.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 49, category: 'electricity', media: 'images/Electricity_Photos/IMG10.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 50, category: 'electricity', media: 'images/Electricity_Photos/IMG11.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 51, category: 'electricity', media: 'images/Electricity_Photos/IMG12.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 52, category: 'electricity', media: 'images/Electricity_Photos/IMG13.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 53, category: 'electricity', media: 'images/Electricity_Photos/IMG14.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 54, category: 'electricity', media: 'images/Electricity_Photos/IMG15.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 55, category: 'electricity', media: 'images/Electricity_Photos/IMG16.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 56, category: 'electricity', media: 'images/Electricity_Photos/IMG17.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 57, category: 'electricity', media: 'images/Electricity_Photos/IMG18.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 58, category: 'electricity', media: 'images/Electricity_Photos/IMG19.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 59, category: 'electricity', media: 'images/Electricity_Photos/IMG20.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 60, category: 'electricity', media: 'images/Electricity_Photos/IMG21.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 61, category: 'electricity', media: 'images/Electricity_Photos/IMG22.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 62, category: 'electricity', media: 'images/Electricity_Photos/IMG23.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 63, category: 'electricity', media: 'images/Electricity_Photos/IMG24.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 64, category: 'electricity', media: 'images/Electricity_Photos/IMG25.mp4', type: 'video', title: 'فيديو كهرباء' },
    { id: 65, category: 'electricity', media: 'images/Electricity_Photos/IMG26.jpg', type: 'image', title: 'أعمال كهربائية' },
    
    // Plumbing Images
    { id: 66, category: 'plumbing', media: 'images/Plumbing_Photos/IMG1.jpg', type: 'image', title: 'أعمال سباكة' },
    { id: 67, category: 'plumbing', media: 'images/Plumbing_Photos/IMG2.jpg', type: 'image', title: 'تركيب أنابيب' },
    { id: 68, category: 'plumbing', media: 'images/Plumbing_Photos/IMG3.jpg', type: 'image', title: 'إصلاح سباكة' },
    
    // Plumbing Videos
    { id: 69, category: 'plumbing', media: 'images/Plumbing_Photos/VID1.mp4', type: 'video', title: 'فيديو سباكة 1' },
    { id: 70, category: 'plumbing', media: 'images/Plumbing_Photos/VID2.mp4', type: 'video', title: 'فيديو سباكة 2' },
];

// ========================================
// RENDER PORTFOLIO ITEMS
// ========================================

function renderPortfolioItems(filter = 'all') {
    const portfolioGrid = document.getElementById('portfolioGrid');
    portfolioGrid.innerHTML = '';

    const filteredItems = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);

    filteredItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        if (item.type === 'video') {
            portfolioItem.innerHTML = `
                <div class="portfolio-video-container">
                    <video controls preload="metadata" style="width: 100%; height: 100%;" poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E">
                        <source src="${item.media}" type="video/mp4">
                        متصفحك لا يدعم تشغيل الفيديو
                    </video>
                </div>
            `;
        } else {
            portfolioItem.innerHTML = `
                <a href="${item.media}" data-lightbox="portfolio" data-title="${item.title}">
                    <img src="${item.media}" alt="${item.title}" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-overlay-content">
                            <div class="portfolio-overlay-icon"><i class="fas fa-search-plus"></i></div>
                            <div class="portfolio-overlay-title">${item.title}</div>
                        </div>
                    </div>
                </a>
            `;
        }
        
        portfolioGrid.appendChild(portfolioItem);
    });

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
// FILTER FUNCTIONALITY
// ========================================

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Render filtered items
            const filter = button.getAttribute('data-filter');
            renderPortfolioItems(filter);
        });
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
    renderPortfolioItems();
    initializeFilters();
    initializeMobileMenu();
});
