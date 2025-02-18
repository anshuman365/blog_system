document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const articleTitle = params.get("title");

    if (articleTitle) {
        fetch("article_data.json")
            .then(response => response.json())
            .then(data => {
                if (data[articleTitle]) {
                    const article = data[articleTitle];

                    document.getElementById("article-title").textContent = article.title;
                    document.getElementById("article-author").textContent = "By " + article.author;
                    document.getElementById("article-date").textContent = article.date;
                    document.getElementById("article-content").textContent = article.content;
                    document.getElementById("article-image").src = article.image;

                    const tagsContainer = document.getElementById("article-tags");
                    tagsContainer.innerHTML = "";
                    article.tags.forEach(tag => {
                        const tagElement = document.createElement("span");
                        tagElement.className = "tag";
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                } else {
                    document.getElementById("article-content").textContent = "Article not found.";
                }
            })
            .catch(error => console.error("Error fetching article data:", error));
    }
});