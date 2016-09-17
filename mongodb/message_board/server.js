/* import modules */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/* use modules */
var app = express();
app.use(bodyParser.urlencoded('body-parser'));
app.use(express.static(path.join(__dirname, './static')));

/* set up our view path and engine */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/* mongoose */
var host = 'localhost';
mongoose.connect('mongodb://' + host + '/message_board');
var Schema = mongoose.Schema;

/* schema for post model */
var postSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: [4, "Name must be at least 4 characters"] },
  text: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] 
}, { timestamps: true });
mongoose.model('Post', postSchema);
var Post = mongoose.model('Post');

/* schema for comment model */
var commentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: [4, "Name must be at least 4 characters"] },
  _post: { type: Schema.Types.ObjectId, ref: 'Post' }, // foreign key to Post
  text: { type: String, required: true },
}, { timestamps: true }); 
mongoose.model('Comment', commentSchema);
var Comment = mongoose.model('Comment');

/* routes */
// index route: displays all posts and their comments
app.get('/', function(req, res) {
  Post.find({}).populate('comments').exec( function(err, posts) {
    if (err) {
      console.log("error getting all posts", err);
      res.render("index", { error : err });
    } else {
      res.render("index", { posts : posts });
    }
  });
});

// add new post
app.post('/posts', function(req, res) {
  console.log("post data", req.body);
  var post = new Post({ name: req.body.poster, text: req.body.message });
  post.save(function(err) {
    if (err) {
      console.log("error saving post", err);
      res.redirect('/');
    } else {
      console.log("successfully added a post");
      res.redirect('/');
    }
  });
});

// get the comments for one post
app.get('/posts/:id', function(req, res) {
  // the populate() method is what grabs all comments using their IDs stored in the comments
  // property array of the post document. will replace IDS with text comment
  Post.findOne({ _id: req.params.id })
    .populate('comments') // .populate() gathers associated comments, .exec() fires the action
    .exec(function(err, post) {
      if (err) {
        console.log("error getting comments", err);
        res.redirect('/');
      } else {
        res.redirect('/');
      }
    });
});

// add comment to a pre-existing post
app.post('/posts/:id', function(req, res) {
  Post.findOne({ _id: req.params.id }, function(err, post) {
    if (err) {
      console.log("error finding the post", err); 
      return res.redirect('/');
    }

    var comment = new Comment({ name: req.body.commenter, text: req.body.comment });
    comment._post = post._id; // foreign key reference
    comment.save(function(err) { // save the comment first in comment collection
      if (err) {
        console.log("error saving comment", err); 
        return res.redirect('/');
      }

      post.comments.push(comment);
      post.save(function(err) { // then save comment id into comments array in post collection
        if (err) {
          console.log("error saving post", err); 
          res.redirect('/');
        } else {
          res.redirect('/');
        }
      }); // end post.save
    }); // end comment.save
  }); // end Post.findOne
}); // end app.post

/* listener */
var port = 8000;
var server = app.listen(port, function() {
  console.log("listening on port " + port);
});
