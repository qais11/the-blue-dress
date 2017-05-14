angular.module('myApp')
.controller('mainCtrl',function($scope , mainService, $state, $rootScope, $location){

  $scope.headerIsHidden = false
  $rootScope.$on("$locationChangeStart", function() {
    ( $location.$$path === '/')? $scope.headerIsHidden = false : $scope.headerIsHidden = true;
  });

});
