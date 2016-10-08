console.log("server topics controller");

/* controller method for User model */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Option = mongoose.model('Option');

function Controller() {
  /* get all results for questions */
  this.index = function(req, res) {
    console.log("server questions index");
    Question.find({})
      .populate({ path: "_poster" })
      .exec(function(err, results) {
      if (err) {
        console.log("error finding results");
        res.json({ status: false, result: err });
      } else {
        console.log("found results", results);
        res.json({ status: true, result: results });
      }
    });
  };
  /* add one question to question table. */
  this.create = function(req, res) {
    console.log("server create questions body: ", req.body);
    User.findOne({ _id: req.body.userid }, function(err, user) {
      if (err) {
        res.json({ status: false, result: err });
      } 

      var question = new Question({ 
        question:    req.body.question, 
        _poster:     user._id,
      });

      question.save(function(err) {
        if (err) {
          res.json({ status: false, result: err });
        } else {
          res.json({ status: true, result: question });
        }
      });
    });
  };

  /* get all options for a question */
  this.show = function(req, res) {
    console.log("server show a question: ", req.params);
    Question.findOne({_id: req.params.id})
      .sort({createdAt: -1})
      .populate({ path: "_poster" })
      .populate({ path: "options", populate: { path: "_poster" }})
      .exec(function(err, options) {
      if (err) {
        console.log("something went wrong loading question");
        res.json({ status: false, result: err });
      } else {
        console.log("loading options successful");
        res.json({ status: true, result: options });
      }
    })
  }
  /* add an option to option table for a question. then update options array in question table. */
  this.addOption1 = function(req, res) {
    console.log("server addOption body: ", req.body);
    Question.findOne({ _id: req.body._id }, function(err, question) { // make sure question exists
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var option = new Option({ 
              option:    req.body.option1, 
              _question: question._id,
              _poster:   user._id
            });

            option.save(function(err) { // save option
              if (err) {
                res.json({ status: false, result: err });
              } else {
                question.options.push(option);
                question.save(function(err) { // save question
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    res.json({ status: true, result: option });
                  }
                });
              }
            }); // end option.save
          }
        }); // end User.findOne
      }
    }); // end Question.findOne
  };

  this.addOption2 = function(req, res) {
    console.log("server addOption body: ", req.body);
    Question.findOne({ _id: req.body._id }, function(err, question) { // make sure question exists
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var option = new Option({ 
              option:    req.body.option2, 
              _question: question._id,
              _poster:   user._id
            });

            option.save(function(err) { // save option
              if (err) {
                res.json({ status: false, result: err });
              } else {
                question.options.push(option);
                question.save(function(err) { // save question
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    res.json({ status: true, result: option });
                  }
                });
              }
            }); // end option.save
          }
        }); // end User.findOne
      }
    }); // end Question.findOne
  };
  this.addOption3 = function(req, res) {
    console.log("server addOption body: ", req.body);
    Question.findOne({ _id: req.body._id }, function(err, question) { // make sure question exists
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var option = new Option({ 
              option:    req.body.option3, 
              _question: question._id,
              _poster:   user._id
            });

            option.save(function(err) { // save option
              if (err) {
                res.json({ status: false, result: err });
              } else {
                question.options.push(option);
                question.save(function(err) { // save question
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    res.json({ status: true, result: option });
                  }
                });
              }
            }); // end option.save
          }
        }); // end User.findOne
      }
    }); // end Question.findOne
  };
  this.addOption4 = function(req, res) {
    console.log("server addOption body: ", req.body);
    Question.findOne({ _id: req.body._id }, function(err, question) { // make sure question exists
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var option = new Option({ 
              option:    req.body.option4, 
              _question: question._id,
              _poster:   user._id
            });

            option.save(function(err) { // save option
              if (err) {
                res.json({ status: false, result: err });
              } else {
                question.options.push(option);
                question.save(function(err) { // save question
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    res.json({ status: true, result: option });
                  }
                });
              }
            }); // end option.save
          }
        }); // end User.findOne
      }
    }); // end Question.findOne
  };

  /* add vote. push user object into votes field in option table */
  this.addVote = function(req, res) {
    console.log("server addVote", req.body);
    Option.findOne({ _id: req.body._id }, function(err, option) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            option.votes.push(user);
            option.save(function(err) { // save option
              if (err) {
                res.json({ status: false, result: err });
              } else {
                res.json({ status: true, result: option });
              }
            });
          }
        }); // end User.findOne
      }   
    }); // end Option.findOne
  } // end addVote

  this.delete = function(req, res) {
    console.log("server delete body", req.body);
    console.log("server delete params", req.params);
    Question.remove({ _id: req.params.id }, function(err) {
      if (err) {
        res.json({ status: false, result : err });
      } else {
        res.json({ status: true, result: "successfully removed " + req.params });
      }
    });
  };

} // end function controller
module.exports = new Controller();

