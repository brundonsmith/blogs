
const { html } = require('../utils')

module.exports = () =>
    html`
        <head>
            <link rel="stylesheet" type="text/css" href="/site.css">
            <script src="/site.js"></script>
        </head>
    `