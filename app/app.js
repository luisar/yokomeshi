'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('yokoApp', [
  'ngRoute',
  'yokoApp.view1',
  'yokoApp.view2',
  'yokoApp.version',
  'firebase'
])
.factory('wordsFactory', function($http, $firebaseObject, $firebaseAuth){
  var factory = {};
  var ref = new Firebase("https://resplendent-fire-4284.firebaseio.com/words/");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  var words = syncObject;
  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);

  factory.getWords = function(){
    return words;
  };
  factory.addWords = function(){
    //ajax call here
  }
  return factory;
})
.controller('yokoAppCtrl', function($scope, $firebaseObject, $firebaseAuth, wordsFactory){
  var ref = new Firebase("https://resplendent-fire-4284.firebaseio.com/words/");
  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);
  // synchronize the object with a three-way data binding
  syncObject.$bindTo($scope, "data");

  // login with Facebook
  // auth.$authWithOAuthPopup("facebook").then(function(authData) {
  //   console.log("Logged in as:", authData.uid);
  // }).catch(function(error) {
  //   console.log("Authentication failed:", error);
  // });
  //https://www.firebase.com/docs/web/guide/login/facebook.html
  //http://tutorialzine.com/2013/08/learn-angularjs-5-examples/

  $scope.words = [];

  init();

  function init(){
    $scope.words = wordsFactory.getWords();
  }

  $scope.addNewWord = function(){
    $scope.words.push({
      content: $scope.newWords.word
    });
  };

})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
