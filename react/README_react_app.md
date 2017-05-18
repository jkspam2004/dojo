# React App

## Installation (global)
`npm install -g create-react-app`

## Starting Project
`create-react-app firstProject`

Clean up unnecessary content left by create
* delete src/logo.svg
* delete src/App.test.js
* remove content from src/App.css. add Bootstrap:
```
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css');
```

## Running Project
* npm run start will start up your Webpack dev server just like we've done through out the first couple of chapters.
* npm run build is used when your application is ready for production, it will bundle all of your files and place them in a build folder.

## Dependencies
`npm install react-router react-router-dom --save`
