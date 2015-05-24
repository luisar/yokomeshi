'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('yokoApp', [
  'ngRoute',
  'yokoApp.view1',
  'yokoApp.view2',
  'yokoApp.version'
])
.factory('wordsFactory', function($http){
  var factory = {};
  var words = [
    {content:"hi", definition:"ooo"},
    {content:"h3", definition:"ooo222"}
  ];
  factory.getWords = function(){
    return words;
    //ajax call here
  };
  factory.addWords = function(){
    //something
  }
  return factory;
})
.controller('yokoAppCtrl', function($scope, wordsFactory){
  $scope.words = [];

  init();

  function init(){
    $scope.words = wordsFactory.getWords();
  }

  $scope.addNewWord = function(){
    $scope.words.push({
      content: $scope.newWords.word,
      definition: "blahblah"
    });
  };
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
