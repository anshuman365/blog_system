
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

function toggleMenu() {
    let nav = document.querySelector('.nav-links');
    nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}