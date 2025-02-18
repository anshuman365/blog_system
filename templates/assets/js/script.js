

// Like System
function initLikeSystem() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.like-btn')) {
            const heart = e.target.closest('.like-btn');
            heart.classList.toggle('active');
            const likesCount = heart.querySelector('.likes-count');
            if (likesCount) {
                const currentCount = parseInt(likesCount.textContent);
                likesCount.textContent = heart.classList.contains('active') ? currentCount + 1 : currentCount - 1;
            }
        }
    });
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLikeSystem();
    
    // Scroll Progress
    window.addEventListener('scroll', () => {
        const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
    });
});


// Add to script.js
function initSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterPosts(searchTerm);
    });
}

function filterPosts(term) {
    document.querySelectorAll('.blog-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(term) ? 'block' : 'none';
    });
}