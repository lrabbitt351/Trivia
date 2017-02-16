var users = require('./../controllers/user.js');
var questions = require('./../controllers/question.js');

module.exports = function(app){
  app.post('/login', users.login);
  app.get('/users', users.index);
  app.get('/checkstatus', users.checkStatus);
  app.get('/logout', users.logout);
  app.get('/users/getUser', users.getUser);
  app.get('/users/getScores', users.getScores);
  app.post('/questions/create', questions.create);
  app.get('/questions/getQuestions', questions.getQuestions);
  app.post('/questions/answerTrivia', questions.answerTrivia);
};
