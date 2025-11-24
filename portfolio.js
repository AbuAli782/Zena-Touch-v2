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
    { id: 40, category: 'decoration', media: 'images/Decoration_Photos/VID11.mp4', type: 'video', title: 'فيديو ديكور 11' },
    { id: 41, category: 'decoration', media: 'images/Decoration_Photos/VID12.mp4', type: 'video', title: 'فيديو ديكور 12' },
    { id: 42, category: 'decoration', media: 'images/Decoration_Photos/VID13.mp4', type: 'video', title: 'فيديو ديكور 13' },
    { id: 43, category: 'decoration', media: 'images/Decoration_Photos/VID14.mp4', type: 'video', title: 'فيديو ديكور 14' },
    { id: 44, category: 'decoration', media: 'images/Decoration_Photos/VID15.mp4', type: 'video', title: 'فيديو ديكور 15' },
    { id: 45, category: 'decoration', media: 'images/Decoration_Photos/VID16.mp4', type: 'video', title: 'فيديو ديكور 16' },
    { id: 46, category: 'decoration', media: 'images/Decoration_Photos/VID17.mp4', type: 'video', title: 'فيديو ديكور 17' },
    { id: 47, category: 'decoration', media: 'images/Decoration_Photos/VID18.mp4', type: 'video', title: 'فيديو ديكور 18' },
    { id: 48, category: 'decoration', media: 'images/Decoration_Photos/VID19.mp4', type: 'video', title: 'فيديو ديكور 19' },
    { id: 49, category: 'decoration', media: 'images/Decoration_Photos/VID20.mp4', type: 'video', title: 'فيديو ديكور 20' },
    { id: 50, category: 'decoration', media: 'images/Decoration_Photos/VID21.mp4', type: 'video', title: 'فيديو ديكور 21' },
    { id: 51, category: 'decoration', media: 'images/Decoration_Photos/VID22.mp4', type: 'video', title: 'فيديو ديكور 22' },
    { id: 52, category: 'decoration', media: 'images/Decoration_Photos/VID23.mp4', type: 'video', title: 'فيديو ديكور 23' },
    { id: 53, category: 'decoration', media: 'images/Decoration_Photos/VID24.mp4', type: 'video', title: 'فيديو ديكور 24' },
    { id: 54, category: 'decoration', media: 'images/Decoration_Photos/VID25.mp4', type: 'video', title: 'فيديو ديكور 25' },
    { id: 55, category: 'decoration', media: 'images/Decoration_Photos/VID26.mp4', type: 'video', title: 'فيديو ديكور 26' },
    { id: 56, category: 'decoration', media: 'images/Decoration_Photos/VID27.mp4', type: 'video', title: 'فيديو ديكور 27' },
    { id: 57, category: 'decoration', media: 'images/Decoration_Photos/VID28.mp4', type: 'video', title: 'فيديو ديكور 28' },
    { id: 58, category: 'decoration', media: 'images/Decoration_Photos/VID29.mp4', type: 'video', title: 'فيديو ديكور 29' },
    { id: 59, category: 'decoration', media: 'images/Decoration_Photos/VID30.mp4', type: 'video', title: 'فيديو ديكور 30' },
    { id: 60, category: 'decoration', media: 'images/Decoration_Photos/VID31.mp4', type: 'video', title: 'فيديو ديكور 31' },
    { id: 61, category: 'decoration', media: 'images/Decoration_Photos/VID32.mp4', type: 'video', title: 'فيديو ديكور 32' },
    { id: 62, category: 'decoration', media: 'images/Decoration_Photos/VID33.mp4', type: 'video', title: 'فيديو ديكور 33' },
    { id: 63, category: 'decoration', media: 'images/Decoration_Photos/VID34.mp4', type: 'video', title: 'فيديو ديكور 34' },
    { id: 64, category: 'decoration', media: 'images/Decoration_Photos/VID35.mp4', type: 'video', title: 'فيديو ديكور 35' },
    { id: 65, category: 'decoration', media: 'images/Decoration_Photos/VID36.mp4', type: 'video', title: 'فيديو ديكور 36' },
    { id: 66, category: 'decoration', media: 'images/Decoration_Photos/VID37.mp4', type: 'video', title: 'فيديو ديكور 37' },
    { id: 67, category: 'decoration', media: 'images/Decoration_Photos/VID38.mp4', type: 'video', title: 'فيديو ديكور 38' },
    { id: 68, category: 'decoration', media: 'images/Decoration_Photos/VID39.mp4', type: 'video', title: 'فيديو ديكور 39' },
    { id: 69, category: 'decoration', media: 'images/Decoration_Photos/VID40.mp4', type: 'video', title: 'فيديو ديكور 40' },
    { id: 70, category: 'decoration', media: 'images/Decoration_Photos/VID41.mp4', type: 'video', title: 'فيديو ديكور 41' },
    { id: 71, category: 'decoration', media: 'images/Decoration_Photos/VID42.mp4', type: 'video', title: 'فيديو ديكور 42' },
    { id: 72, category: 'decoration', media: 'images/Decoration_Photos/VID43.mp4', type: 'video', title: 'فيديو ديكور 43' },
    { id: 73, category: 'decoration', media: 'images/Decoration_Photos/VID44.mp4', type: 'video', title: 'فيديو ديكور 44' },
    { id: 74, category: 'decoration', media: 'images/Decoration_Photos/VID45.mp4', type: 'video', title: 'فيديو ديكور 45' },
    { id: 75, category: 'decoration', media: 'images/Decoration_Photos/VID46.mp4', type: 'video', title: 'فيديو ديكور 46' },
    
    // Electricity Images
    { id: 76, category: 'electricity', media: 'images/Electricity_Photos/IMG1.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 77, category: 'electricity', media: 'images/Electricity_Photos/IMG2.jpg', type: 'image', title: 'صيانة كهربائية' },
    { id: 78, category: 'electricity', media: 'images/Electricity_Photos/IMG3.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 79, category: 'electricity', media: 'images/Electricity_Photos/IMG4.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 80, category: 'electricity', media: 'images/Electricity_Photos/IMG5.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 81, category: 'electricity', media: 'images/Electricity_Photos/IMG6.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 82, category: 'electricity', media: 'images/Electricity_Photos/IMG7.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 83, category: 'electricity', media: 'images/Electricity_Photos/IMG8.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 84, category: 'electricity', media: 'images/Electricity_Photos/IMG9.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 85, category: 'electricity', media: 'images/Electricity_Photos/IMG10.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 86, category: 'electricity', media: 'images/Electricity_Photos/IMG11.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 87, category: 'electricity', media: 'images/Electricity_Photos/IMG12.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 88, category: 'electricity', media: 'images/Electricity_Photos/IMG13.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 89, category: 'electricity', media: 'images/Electricity_Photos/IMG14.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 90, category: 'electricity', media: 'images/Electricity_Photos/IMG15.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 91, category: 'electricity', media: 'images/Electricity_Photos/IMG16.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 92, category: 'electricity', media: 'images/Electricity_Photos/IMG17.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 93, category: 'electricity', media: 'images/Electricity_Photos/IMG18.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 94, category: 'electricity', media: 'images/Electricity_Photos/IMG19.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 95, category: 'electricity', media: 'images/Electricity_Photos/IMG20.jpg', type: 'image', title: 'أعمال كهربائية' },
    { id: 96, category: 'electricity', media: 'images/Electricity_Photos/IMG21.jpg', type: 'image', title: 'تركيب كهربائي' },
    { id: 97, category: 'electricity', media: 'images/Electricity_Photos/IMG22.jpg', type: 'image', title: 'صيانة كهرباء' },
    { id: 98, category: 'electricity', media: 'images/Electricity_Photos/IMG23.jpg', type: 'image', title: 'أعمال كهرباء' },
    { id: 99, category: 'electricity', media: 'images/Electricity_Photos/IMG24.jpg', type: 'image', title: 'تركيب إضاءة' },
    { id: 100, category: 'electricity', media: 'images/Electricity_Photos/IMG25.mp4', type: 'video', title: 'فيديو كهرباء' },
    { id: 101, category: 'electricity', media: 'images/Electricity_Photos/IMG26.jpg', type: 'image', title: 'أعمال كهربائية' },
    
    // Plumbing Images
    { id: 102, category: 'plumbing', media: 'images/Plumbing_Photos/IMG1.jpg', type: 'image', title: 'أعمال سباكة' },
    { id: 103, category: 'plumbing', media: 'images/Plumbing_Photos/IMG2.jpg', type: 'image', title: 'تركيب أنابيب' },
    { id: 104, category: 'plumbing', media: 'images/Plumbing_Photos/IMG3.jpg', type: 'image', title: 'إصلاح سباكة' },
    
    // Plumbing Videos
    { id: 105, category: 'plumbing', media: 'images/Plumbing_Photos/VID1.mp4', type: 'video', title: 'فيديو سباكة 1' },
    { id: 106, category: 'plumbing', media: 'images/Plumbing_Photos/VID2.mp4', type: 'video', title: 'فيديو سباكة 2' },
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
                    <video 
                        controls 
                        preload="auto" 
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23000' width='400' height='300'/%3E%3C/svg%3E" 
                        crossorigin="anonymous">
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

    // Trigger video handler to configure new videos
    if (typeof videoHandler !== 'undefined') {
        setTimeout(() => {
            videoHandler.setupVideos();
        }, 100);
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
