app.controller('questionController', function($scope, $routeParams, questionFactory){
  $scope.errors = [];
  $scope.randomAnswers = [];
  $scope.randomQuestion1 = {};
  $scope.randomQuestionAnswers1 = [];
  $scope.randomQuestion2 = {};
  $scope.randomQuestionAnswers2 = [];
  $scope.randomQuestion3 = {};
  $scope.randomQuestionAnswers3 = [];
  $scope.correct = {count : 0};

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

$scope.addQuestion = function(){
  $scope.errors = [];
  if(!$scope.newQuestion.question || !$scope.newQuestion.correctAnswer || !$scope.newQuestion.wrongAnswer1 || !$scope.newQuestion.wrongAnswer2){
    $scope.errors.push('Please make sure all fields have entries.');
  } else if ($scope.newQuestion.question.length < 15) {
    $scope.errors.push('Question must be 15 characters long.');
  } else {
    alert("Question successfully added");
    questionFactory.addQuestion($scope.newQuestion);
  }
};
questionFactory.getQuestions(function(data){
  $scope.questions = data;
  if($scope.questions.length < 3){
      $scope.errors.push("Not enough questions to play Trivia, please create more questions in order to play.");
  } else {
    $scope.randomAnswers = [];
    shuffleArray($scope.questions);
    $scope.randomQuestion1 = $scope.questions[0];
    $scope.randomAnswers.push($scope.randomQuestion1.correctAnswer);
    $scope.randomQuestionAnswers1.push($scope.randomQuestion1.correctAnswer, $scope.randomQuestion1.wrongAnswer1, $scope.randomQuestion1.wrongAnswer2);
    shuffleArray($scope.randomQuestionAnswers1);
    $scope.randomQuestion2 = $scope.questions[1];
    $scope.randomAnswers.push($scope.randomQuestion2.correctAnswer);
    $scope.randomQuestionAnswers2.push($scope.randomQuestion2.correctAnswer, $scope.randomQuestion2.wrongAnswer1, $scope.randomQuestion2.wrongAnswer2);
    shuffleArray($scope.randomQuestionAnswers2);
    $scope.randomQuestion3 = $scope.questions[2];
    $scope.randomAnswers.push($scope.randomQuestion3.correctAnswer);
    $scope.randomQuestionAnswers3.push($scope.randomQuestion3.correctAnswer, $scope.randomQuestion3.wrongAnswer1, $scope.randomQuestion3.wrongAnswer2);
    shuffleArray($scope.randomQuestionAnswers3);
  }
});


$scope.answerTrivia = function(){
  if((!$scope.answer) || (!$scope.answer.a1 && !$scope.answer.a2 && !$scope.answer.a3)){
    $scope.errors.push("Please answer all questions");
  } else {
    $scope.correct = {count : 0};
    for(var answer in $scope.randomAnswers){
      if($scope.answer.a1 === $scope.randomAnswers[answer] || $scope.answer.a2 === $scope.randomAnswers[answer] || $scope.answer.a3 === $scope.randomAnswers[answer]){
        $scope.correct.count += 1;
      }
    }
    questionFactory.getUser(function(data){
      $scope.selectedUser = data;
    });
    alert("That was great, " + $scope.selectedUser.name + "! Your score is " + $scope.correct.count + "/3 " + "(" + (($scope.correct.count / 3) * 100).toFixed(2) + "%)");
    questionFactory.answerTrivia($scope.correct);
  }
};
  });
