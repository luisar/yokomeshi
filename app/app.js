'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('yokoApp', [
  'ngRoute',
  'yokoApp.view1',
  'yokoApp.view2',
  'yokoApp.version',
  'firebase'
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
.controller('yokoAppCtrl', function($scope, $firebaseObject, $firebaseAuth, wordsFactory){
  var ref = new Firebase("https://resplendent-fire-4284.firebaseio.com/data");

  // download the data into a local object
  var syncObject = $firebaseObject(ref);
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
  syncObject.$bindTo($scope, "data");


  // create an instance of the authentication service
  var auth = $firebaseAuth(ref);

  // login with Facebook
  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });

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
