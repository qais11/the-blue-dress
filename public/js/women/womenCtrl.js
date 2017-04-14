angular.module('myApp')
.controller('womenCtrl' , function($scope , womenService){
  $scope.test1 = womenService.test1
  console.log("hey");
});
