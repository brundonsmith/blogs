
const { html } = require('../utils')
const head = require('./head.html')

module.exports = (blogData, allTags) =>
    html`
        <script>
            window.blogData = ${JSON.stringify(blogData)}
        </script>

        ${head()}

        <h1>Find blogs written by real humans</h1>

        <div class="controls">
            <input id="search" type="search" placeholder="Search...">

            <br>

            Tags: 

            ${allTags.map(tag => 
                html`
                    <a class="tag-link" href="#${tag}">${tag}</a>
                `.trim()).join(', ')}

            <a class="tag-link" href="#">[clear tag]</a>
        </div>

    `