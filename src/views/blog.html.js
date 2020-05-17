
const { html } = require('../utils')
const head = require('./head.html')

module.exports = (blog, index) =>
    html`
        ${head()}

        <div class="listing" data-blog-index="${index}">
            <h2>
                <img src="${blog.favicon || 'favicon.ico'}" width="16" height="16">
                ${blog.title || blog.url}
            </h2>
            <p>
                ${blog.description || '(Description unavailable)'}
            </p>
        </div>`