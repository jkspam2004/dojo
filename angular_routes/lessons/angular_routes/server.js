// express setup
var express=require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
console.log(__dirname);

var server = app.listen(8000, function() {});
