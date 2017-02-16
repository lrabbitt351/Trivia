app.factory('questionFactory', function($http, $route, $location){
  factory = {};
  factory.addQuestion = function(question){
    $http.post('/questions/create', question).then(function(output){
      $location.url('/dash');
    });
  };
  factory.getQuestions = function(cb){
    $http.get('/questions/getQuestions').then(function(output){
      cb(output.data);
    });
  };
factory.answerTrivia = function(correct){
  $http.post('/questions/answerTrivia', correct).then(function(output){
    $location.url('/dash');
  });
};
factory.getUser = function(cb){
  $http.get('/users/getUser').then(function(output){
    cb(output.data);
  });
};
return factory;
});
