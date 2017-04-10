# file structure layout

```
myproject
    /css
        style.css
    /js
        app.js
    index.html
```

## upgrade node. uninstall first
http://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x?answertab=active#tab-top
https://nodejs.org/en/

## install browser-sync
`npm install -g browser-sync`

## run browser-sync to update browser page upon file modification
`browser-sync start --server --files "*.html, js/*.js, css/*.css"`
