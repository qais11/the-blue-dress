angular.module('myApp')
.controller('mainCtrl',function($scope , mainService, $state){
  $scope.test = mainService.test
});
