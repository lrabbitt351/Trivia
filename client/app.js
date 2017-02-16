var  app = angular.module('triviaApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl: 'partials/login.html',
	})
	.when('/dash',{
		templateUrl: 'partials/dash.html',
	})
	.when('/new_question',{
		templateUrl: 'partials/newQuestion.html',
	})
	.when('/letsPlay',{
		templateUrl: 'partials/trivia.html',
	})
	.otherwise({
		redirectTo: '/login'
	});

});
