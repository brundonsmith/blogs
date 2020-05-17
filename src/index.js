
const fs = require('fs')
const http = require('http')
const https = require('https')
const blogs = require('./blogs.json')

const scrape = require('./scrape')


const fetch = (url) => new Promise((res, rej) => 
    (url.includes('https') 
        ? https
        : http).get(url, (response) => {

            let data = '';
            response.on('data', (chunk) => data += chunk);
            response.on('end', () => res({ response, data }))
        }).on('error', rej));


const generateSite = async () => {
    const combinedBlogData = await Promise.all(
        blogs.map(async (blog, index) => {
            const homepage = await fetch(blog.url);
            return { id: String(index), ...blog, ...scrape(homepage.data) };
        }));

    const allTags = combinedBlogData.reduce((all, blog) => 
        all.concat(blog.tags || [])
            .filter((el, i, arr) => arr.indexOf(el) === i) // unique
    , [])
        
    const renderIndex = require('./views/index.html');
    const renderBlog = require('./views/blog.html');

    fs.writeFileSync(`docs/index.html`, renderIndex(combinedBlogData, allTags))
    
    for(let i = 0; i < combinedBlogData.length; i++) {
        fs.writeFileSync(`docs/blog/${i}.html`, renderBlog(combinedBlogData[i], i))
    }
}

generateSite();