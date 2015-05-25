// function inlineEditorController($scope){
// 	$scope.showtooltip = false;
//
// 	$scope.hideTooltip = function(){
// 		$scope.showtooltip = false;
// 	}
//
// 	$scope.toggleTooltip = function(e,content){
//     e.stopPropagation();
//     $scope.showtooltip = !$scope.showtooltip;
//     $scope.value = content;
//   }
// }

app.controller('inlineEditorController', function inlineEditorController($scope){
	$scope.showtooltip = false;

	$scope.hideTooltip = function(){
		$scope.showtooltip = false;
	}

	$scope.toggleTooltip = function(e,content){
    e.stopPropagation();
    $scope.showtooltip = !$scope.showtooltip;
    $scope.value = content;
  }
});
