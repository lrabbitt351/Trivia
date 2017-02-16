var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Score = mongoose.model('Score');
module.exports = (function(req, res){
  return {
    create: function(req, res){
      var question = new Question(req.body);
      question._user = req.session.user._id;
      question.save(function(err, data){
        User.findOne({_id: question._user}, function(err, user){
          user.questions.push(data.id);
          user.save(function(err, userData){
            res.json(userData);
          });
        });
      });
    },
    getQuestions: function(req, res){
      Question.find({}, function(err, data){
        if(err){
          res.json(err);
        } else {
          res.json(data);
        }
      });
    },
    getQuestion: function(req, res){
      Question.findOne({_id: req.params.id}, function(err, data){
        if(err){
          res.json(err);
        } else {
          res.json(data);
        }
      });
    },

    answerTrivia: function(req, res){
      var score = new Score(req.body);
      score._user = req.session.user._id;
      score.score = req.body.count;
      score.save(function(err, data){
        User.findOne({_id: score._user}, function(err, user){
          user.scores.push(data.id);
          user.save(function(err, userData){
            res.json(userData);
          });
        });
      });
    }
};
})();
