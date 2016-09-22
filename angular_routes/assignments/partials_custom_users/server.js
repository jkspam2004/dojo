var mongoose = require('mongoose'),
    express  = require('express'),
    bparser  = require('body-parser'),
    path     = require('path'),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));
app.use(bparser.json());

app.listen(port, function() {
  console.log(`server running on port ${port}`);
});
