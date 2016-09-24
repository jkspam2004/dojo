console.log("server topics controller");

/* controller method for User model */
var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

function Controller() {
  /* get all results for topics */
  this.index = function(req, res) {
    console.log("server index");
    Topic.find({}, function(err, results) {
      if (err) {
        console.log("error finding results");
        res.json({ status: false, result: err });
      } else {
        console.log("found results", results);
        res.json({ status: true, result: results });
      }
    });
  };
  /* add one topic to topic table. increment topics count in user table */
  this.create = function(req, res) {
    console.log("server create body: ", req.body);
    User.findOne({ _id: req.body._id }, function(err, user) {
      if (err) {
        res.json({ status: false, result: err });
      } 

      var topic = new Topic({ 
        topic:        req.body.topic, 
        description:  req.body.description,
        category:     req.body.category,
        _poster:      user._id,
      });

      topic.save(function(err) {
        if (err) {
          res.json({ status: false, result: err });
        } else {
          user.topics++; // increment topics count for user
          user.save(function(err) {
            if (err) {
              res.json({ status: false, result: err });
            } else {
              res.json({ status: true, result: topic });
            }
          });
        }
      });
    });
  };

  /* get all posts and comments for a topic */
  this.show = function(req, res) {
    Post.find({_topic: req.params.id})
      .sort({createdAt: -1})
      .populate({ path: "_poster" })
      .populate({ path: "comments", populate:{ path: "_poster"} })
      .exec(function(err, posts) {
      if (err) {
        console.log("something went wrong loading posts");
        res.json({ status: false, result: err });
      } else {
        console.log("loading answers successful");
        res.json({ status: true, result: posts });
      }
    })
  }
  /* add a post to post table. then update posts array in topics table. increment posts count in users table */
  this.addPost = function(req, res) {
    console.log("server create body: ", req.body);
    Topic.findOne({ _id: req.body._id }, function(err, topic) { // make sure topic exists
      if (err) {
        res.json({ status: false, result: err });
      } else { 
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var post = new Post({ 
              message: req.body.message, 
              _topic:  topic._id,
              _poster: user._id
            });

            post.save(function(err) { // save post
              if (err) {
                res.json({ status: false, result: err });
              } else {
                topic.posts.push(post);
                topic.save(function(err) { // save topic
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    user.posts++; // increment topics count for user
                    user.save(function(err) { // save user
                      if (err) {
                        res.json({ status: false, result: err });
                      } else {
                        res.json({ status: true, result: post });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  /* add a comment for given post. increment comments count for user */
  this.addComment = function(req, res) {
    Post.findOne({ _id: req.body._id}, function(err, post) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var comment = new Comment({ 
              comment: req.body.comment, 
              _poster: user._id
            });

            comment.save(function(err) { // save comment
              if (err) {
                res.json({ status: false, result: err });
              } else {
                post.comments.push(comment);
                post.save(function(err) { // save topic
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    user.comments++; // increment topics count for user
                    user.save(function(err) { // save user
                      if (err) {
                        res.json({ status: false, result: err });
                      } else {
                        res.json({ status: true, result: comment });
                      }
                    });
                  }
                });
              }
           });
         }
        });
      }
    });    
  };

  /* delete a topic */
  this.delete = function(req, res) {
    console.log("server delete body", req.body);
    console.log("server delete params", req.params);
    Topic.remove({ _id: req.params.id }, function(err) {
      if (err) {
        res.json({ status: false, result : err });
      } else {
        res.json({ status: true, result: "successfully removed " + req.params });
      }
    });
  };
}
module.exports = new Controller();

