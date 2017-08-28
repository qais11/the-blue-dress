angular.module('myApp')
.controller('loginCtrl' , function($scope,$state ,mainService){
$scope.goHome = mainService.goHome
})
