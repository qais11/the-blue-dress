angular.module('myApp')
.service('mainService', function($location , $state){
  this.goHome = function(){
    $state.go('home')
  }
});
