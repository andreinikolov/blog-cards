const postsURL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";
const dateOptions = {
    day: "numeric",
    month: "long", 
    year: "numeric"
};
const dateLocale = "en-GB";
const defaultCategory = "Articles"; 

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

// order of preference: group, category, post_tag
function choseCategoryToShow(wpTermData) {
    let group = null;
    let category = null;
    let post_tag = null; //for display purposes in the card header we will use just one of the tags as failover if no group or category are set

    console.log(wpTermData);

    for (let i = 0; i < wpTermData.length; i++) {
        if (wpTermData[i].length == 0) continue; 
        switch (wpTermData[i][0].taxonomy) {
            case "category":
                category = wpTermData[i][0].name;
                break;
            case "group":
                group = wpTermData[i][0].name;
                break;
            case "post_tag":
                post_tag = wpTermData[i][0].name;
                break;
            default:
                break;
        }
    }

    if (group !== null) return group;
    if (category !== null) return category;
    if (post_tag !== null) return post_tag;

    return defaultCategory;
}

async function loadPostsData(url) {
    try {
        let postsData = await (await fetch(url)).json();

        for (let i = 0; i < postsData.length; i++) {
            let category = choseCategoryToShow(postsData[i]._embedded["wp:term"]);
            let imageUrl = postsData[i].featured_media;
            let postTitle = postsData[i].title.rendered;
            let authorName = postsData[i]._embedded.author[0].name;
            let authorProfileUrl = postsData[i]._embedded.author[0].link;             
            let postUrl = postsData[i].link;

            let postDate = new Date(postsData[i].date);

            let datePosted = new Intl.DateTimeFormat(dateLocale, dateOptions).format(postDate)

            addPost(category, imageUrl, postTitle, authorName, authorProfileUrl, datePosted, postUrl);
        }
    }
    catch (error) {
        console.error ("Error fetching posts data:", error);
        document.getElementById("posts-container").innerHTML = "<p>Error fetching posts data</p>";        
    }
}

loadPostsData(postsURL);