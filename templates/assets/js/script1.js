

        // Generate blog cards
        const blogGrid = document.querySelector('.blog-grid');
        
        blogPosts.forEach(post => {
            const card = document.createElement('article');
            card.className = 'blog-card';
            card.innerHTML = `
                <div class="card-image" style="background-image: url('${post.image}')"></div>
                <div class="card-content">
                    <div class="card-meta">
                        <span>${post.date}</span>
                        <span><i class="far fa-heart"></i> ${post.likes}</span>
                    </div>
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <div class="card-tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            blogGrid.appendChild(card);
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