
var app = angular.module('teashopping', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
            .when('/',{
                templateUrl: 'partials/home.html',
                controller: 'HomeController'
            })
            .when('/cart', {
                templateUrl:'partials/cartresults.html',
                controller: 'CartController'
            })

});
