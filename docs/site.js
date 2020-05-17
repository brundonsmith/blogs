
window.addEventListener('load', () => {
    updateList()
    document.querySelector(`#search`).addEventListener('keydown', updateList)
    document.querySelector(`#search`).addEventListener('change', updateList)
    window.addEventListener('hashchange', updateList)
})

const updateList = () => {
    const searchString = document.querySelector('#search').value;
    const tag = (location.hash || '#').substr(1);

    let matchedPosts = window.blogData;

    if(searchString) {
        const searchSegments = searchString.toLowerCase().split(/[\s]+/)
        matchedPosts = matchedPosts.filter(post => 
            searchSegments.some(segment =>
                (post.url && post.url.toLowerCase().includes(segment)) ||
                (post.title && post.title.toLowerCase().includes(segment)) ||
                (post.description && post.description.toLowerCase().includes(segment)) ||
                (post.tags && post.tags.some(tag => tag.toLowerCase().includes(segment)))))
    }

    if(tag) {
        matchedPosts = matchedPosts.filter(post => post.tags && post.tags.includes(tag))
    }

    renderPosts(matchedPosts)
}

const renderPosts = (posts) => {
    document.querySelectorAll(`.listing`).forEach(el => el.remove())
    posts
        .map(renderListing)
        .map(elementFromHTML)
        .forEach(element => document.body.appendChild(element))
}

const imageAtSite = (image, site) => {
    if(image.indexOf('http') === 0) {
        return image;
    }

    if(image[0] === '/') {
        image = image.substr(1);
    }
    if(site[site.length - 1] === '/') {
        site = site.substr(0, site.length - 1);
    }

    return site + '/' + image;
}

const renderListing = (blog) =>
    html`
        <div class="listing" data-blog-id="${blog.id}">
            <h2>
                <img src="${imageAtSite(blog.favicon || '/favicon.ico', blog.url)}" width="24" height="24">
                <a href="/blog/${blog.id}.html">
                    ${blog.title || blog.url}
                </a>
            </h2>
            <p class="${!blog.description ? 'no-description' : ''}">
                ${blog.description || '(description unavailable)'}
            </p>

            <a href="${blog.url}" target="_blank">
                ${blog.url}
            </a>
        </div>
    `

const elementFromHTML = (html) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html.trim();
    return wrapper.firstChild;
}

const html = (segments, ...inserts) => 
    segments.map((s, i) => i < segments.length - 1 ? s + inserts[i] : s).join('')
