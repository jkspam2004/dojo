# Web Pack

## Uses
* Automatically translate all of our ES6 files into ES5, and then add all of our translated ES5 code to a single file.
* Import all of our CSS files, and add it to a single file.
* Bundle all of our images so that we can access them within our html.
* Start a server that will take care of reloading our page when we make changes, much like browser-sync in the previous chapter.

## Dev depedencies

`npm init -y`

### Webpack
`npm install webpack --save-dev`

### Babel
Translate and import ES6 code to ES5
`npm install babel-core babel-preset-env --save-dev`

### Loaders
Loaders are what really make Webpack special, loaders will take care of precompiling everything that we import into our project. We mentioned earlier that Webpack can bundle any type of file in a module, loaders is what makes that possible.

* babel-loader: Will take care of translating and loading our Javascript files.
* css-loader and style-loader: Will take care of loading our CSS files.
* url-loader: Will take care of loading our images.
* html-loader: Will take care of loading our html.

`npm install babel-loader css-loader style-loader url-loader html-loader --save-dev`

### Development Server
`npm install webpack-dev-server --save-dev`

## Folder Structure
-- package.json
-- .babelrc
-- webpack.config.js
-- build/
   -- index.html
-- src/
   -- index.js
   -- index.css
   -- Components/
      -- Card/
         -- Card.css
         -- Card.html
         -- Card.js
      -- Modal/
         -- Modal.css
         -- Modal.html
         -- Modal.js
-- node modules/

### set up .babelrc
```
{
    'presets': ["env"]
}
```

### Webpack config
webpack.config.js
```
const path = require("path);
const webpack = require("webpack");

/* paths */
const sourcePath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "build");

/* config object */
const webpackConfig = {
    /* source and build paths */
    entry: {
        app: sourcePath
    },
    output: {
        path: buildPath,
        filename: "build.js"
    },
    devtools: "#inline-source-map", // debug error in source code

    /* loaders */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limits: 25000, // 25 kb file size limit
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },

    /* dev server */
    devServer: {
        hot: true,
        host: process.env.HOST, // defaults to localhost
        port: process.env.PORT, // defaults to 8080
        stats: "errors-only",
        historyApiFallback: true,
        overlay: {
            errors: true,
            warnings: true
        }
    },

    /* plugins */
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}

/* export our configuration */
module.exports = function() {
    return webpackConfig;
}

```

### build/index.html
main skeleton html file that includes build.js 
```
<script src="build.js"></script>
```

### src/index.js
imports src/index.css and main component
```
import "./index.css";
import Card from "./Components/Card/Card.js";

```

### src/index.css
imports bootstrap
```
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css");
```

### src/Components/Card/Card.js
```
import "./Card.css";
import card from "./Card.html"; // imports file as a string
import Modal from "./../Modal/Modal.js";
```

### npm scripts
package.json
```
"scripts": {
    "start": "webpack-dev-server --content-base build/"
}
```

### start dev server
`npm run start`

### webpack --watch
build bundle file is served from memory.  to serve from disk, do webpack --watch
executable location:
~/Git/dojo/javascript/webPack/template/node_modules/.bin/webpack
webpack-dev-server
