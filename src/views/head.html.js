
const { html } = require('../utils')

module.exports = () =>
    html`
        <head>

            <title>Blogs</title>
            <meta name="description" content="Repository of personal blogs written by real humans">

            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="stylesheet" type="text/css" href="site.css">
            <script src="site.js"></script>
        </head>
    `