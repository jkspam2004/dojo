console.log("server topics controller");

/* controller method for User model */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

function Controller() {
  /* get all results for questions */
  /* don't need to get all answers. just use length in client side to get count of answers */
  this.index = function(req, res) {
    console.log("server questions index");
    Question.find({}, function(err, results) {
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
        description: req.body.description,
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

  /* get all answers for a question */
  this.show = function(req, res) {
    console.log("server show a question: ", req.params);
    Question.findOne({_id: req.params.id})
      .sort({createdAt: -1})
      .populate({ path: "_poster" })
      .populate({ path: "answers", populate: { path: "_poster" }})
      .exec(function(err, answers) {
      if (err) {
        console.log("something went wrong loading question");
        res.json({ status: false, result: err });
      } else {
        console.log("loading answers successful");
        res.json({ status: true, result: answers });
      }
    })
  }
  /* add an answer to answer table in response to a question. then update answers array in question table. */
  this.addAnswer = function(req, res) {
    console.log("server addAnswer body: ", req.body);
    Question.findOne({ _id: req.body._id }, function(err, question) { // make sure question exists
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            var answer = new Answer({ 
              answer:    req.body.answer, 
              _question: question._id,
              _poster:   user._id
            });

            answer.save(function(err) { // save answer
              if (err) {
                res.json({ status: false, result: err });
              } else {
                question.answers.push(answer);
                question.save(function(err) { // save question
                  if (err) {
                    res.json({ status: false, result: err });
                  } else {
                    res.json({ status: true, result: answer });
                  }
                });
              }
            }); // end answer.save
          }
        }); // end User.findOne
      }
    }); // end Question.findOne
  };

  /* add likes. push user object into likes field in answer table */
  this.addLike = function(req, res) {
    console.log("server addLike", req.body);
    Answer.findOne({ _id: req.body._id }, function(err, answer) {
      if (err) {
        res.json({ status: false, result: err });
      } else {
        User.findOne({ _id: req.body.userid }, function(err, user) { // make sure user exists
          if (err) {
            res.json({ status: false, result: err });
          } else {
            answer.likes.push(user);
            answer.save(function(err) { // save answer
              if (err) {
                res.json({ status: false, result: err });
              } else {
                res.json({ status: true, result: answer });
              }
            });
          }
        }); // end User.findOne
      }   
    }); // end Answer.findOne
  }
}
module.exports = new Controller();

