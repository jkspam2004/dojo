* file structure layout

myproject
    /css
        style.css
    /js
        app.js
    index.html


// run browser-sync to update browser page upon file modification
browser-sync start --server --files "*.html, js/*.js, css/*.css"
