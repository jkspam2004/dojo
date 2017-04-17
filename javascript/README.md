# Enable Ecma 6 code to be run on all browsers


## Run npm init in project direct
`npm init -y`

## Dependencies
`npm install js-logger colors --save` 

## Dev dependencies. only needed during development
npm install babel-cli babel-preset-env --save-dev


## Add scripts to package.json
```
  "scripts": {
    "build": "babel src -d build",
    "watch": "babel src --watch -d build"
  },
```

## Configure babel
```
touch .babelrc
mkdir src
touch src/index.js
mkdir build
```

## file structure
```
ecmaSix
---- package.json
---- .babelrc
---- build/
---- src/
     ---- index.js
---- node_modules
     ---- bunch of packages
```

## .babelrc
tell Babel to which version of JavaScript to translate ES6 code. If blank, Babel won't translate
and just copy content as is.  Include babel-preset-env as a dev dependency to set up configuration.

## npm run build
translate all of ES6 JS located in `src` folder and place translations into `build` folder

## npm run watch
watches files in `src` folder for changes and builds automatically


