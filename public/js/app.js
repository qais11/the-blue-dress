angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url:'/',
                templateUrl:"./js/home/home.html",
              })
            .state('men', {
                url:'/men',
                templateUrl: "./js/men/men.html",
              })
            .state('women', {
                url:'/women',
                templateUrl: "./js/women/women.html",
                controller:"womenCtrl"
              })
            .state('kids', {
                url:'/kids',
                templateUrl: "./js/kids/kids.html",
              })
              .state('login', {
                  url:'/login',
                })
              .state('about', {
                  url:'/about',
                  templateUrl: "./js/about/about.html",
                });

$urlRouterProvider
    .otherwise('/');

});
