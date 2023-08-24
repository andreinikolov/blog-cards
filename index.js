function addPost(category, imageUrl, postTitle, authorName, authorProfileUrl, datePosted, postUrl) {
    document.getElementById("posts-container").innerHTML += `
            <div class="col-4">
                <div class="p-card">
                    <div class="p-card__content">
                        <p class="u-no-padding--bottom">${category}</p>
                        <hr class="is-muted">
                        <img class="p-card__image" alt="" height="185" width="330" src="${imageUrl}">
                        <h2 class="p-heading--4">
                            <a href="${postUrl}">${postTitle}</a>
                        </h2>
                        <p><em>By <a href="${authorProfileUrl}">${authorName}</a> on ${datePosted}</em></p>
                        <hr class="is-muted">
                        <p class="u-no-padding--bottom"><a href="${postUrl}">Article</a></p>
                    </div>
                </div>
            </div>
`;    
}

addPost("CLOUD AND SERVER", "https://assets.ubuntu.com/v1/36f1139e-Design-and-Web-Team-Blog.jpg", 
    "Travel, CLIs, and sticky notes: Lilyana\u2019s life as a Canonical UX designer", "James Nunns", 
    "https://ubuntu.com/", "27 November 2018", "https://ubuntu.com/");

addPost("CLOUD AND SERVER", "https://assets.ubuntu.com/v1/36f1139e-Design-and-Web-Team-Blog.jpg", 
    "Travel, CLIs, and sticky notes: Lilyana\u2019s life as a Canonical UX designer", "James Nunns", 
    "https://ubuntu.com/", "27 November 2018", "https://ubuntu.com/");

addPost("CLOUD AND SERVER", "https://assets.ubuntu.com/v1/36f1139e-Design-and-Web-Team-Blog.jpg", 
    "Travel, CLIs, and sticky notes: Lilyana\u2019s life as a Canonical UX designer", "James Nunns", 
    "https://ubuntu.com/", "27 November 2018", "https://ubuntu.com/");