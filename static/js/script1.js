const blogGrid = document.querySelector('.blog-grid');

blogPosts.forEach(post => {
    // Retrieve the stored likes and like state from localStorage
    const storedLikes = parseInt(localStorage.getItem(`likes_${post.id}`)) || 0;
    const isLiked = localStorage.getItem(`liked_${post.id}`) === "true";

    const card = document.createElement('article');
    card.className = 'blog-card';
    card.innerHTML = `
        <div class="card-image" style="background-image: url('${post.image}')"></div>
        <div class="card-content">
            <div class="card-meta">
                <span>${post.date}</span>
                <div class="like-container" data-post-id="${post.id}">
                    <i class="fa fa-heart ${isLiked ? 'fas liked' : 'far'}"></i>
                    <span class="likes-count">${storedLikes}</span>
                </div>
            </div>
            <h2>${post.title}</h2>
            <p>${post.excerpt} <a href="/article/${post.title.replace(/\s+/g, '-')}">Read More</a></p>
            <div class="card-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    blogGrid.appendChild(card);
});


// Like System with Instant Update & Persistent Storage
document.addEventListener('click', (e) => {
    const heart = e.target.closest('.fa-heart');
    if (heart) {
        const container = heart.closest('.like-container');
        const postId = container.getAttribute('data-post-id');
        const likesCount = container.querySelector('.likes-count');
        let currentLikes = parseInt(likesCount.textContent) || 0;
        const isLiked = heart.classList.contains('fas');

        if (!isLiked) {
            // Like action
            heart.classList.replace('far', 'fas');
            currentLikes++;
            localStorage.setItem(`liked_${postId}`, "true");
        } else {
            // Unlike action
            heart.classList.replace('fas', 'far');
            currentLikes = Math.max(0, currentLikes - 1);
            localStorage.removeItem(`liked_${postId}`);
        }

        // Update count & store in localStorage for that specific post
        likesCount.textContent = currentLikes;
        localStorage.setItem(`likes_${postId}`, currentLikes);
    }
});

        // Theme toggle
        const themeButton = document.querySelector('.theme-switch');
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeButton.querySelector('i').classList.toggle('fa-moon');
            themeButton.querySelector('i').classList.toggle('fa-sun');
            
            // Save theme preference
            const isDark = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });

        // Check saved theme
        if(localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeButton.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }


        // Scroll progress indicator
        window.addEventListener('scroll', () => {
            const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
        });
        
   

function toggleMenu(x) {
    x.classList.toggle("change");
}