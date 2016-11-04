// var app = angular.module('omdb', ['ngRoute']);
//
// app.config(function($routeProvider, $locationProvider){
//     $routeProvider
//         .when('/',{
//             templateUrl: 'partials/home.html',
//             controller: 'HomeController'
//         })
//         .when('/', {
//             templateUrl:'partials/results.html',
//             controller: 'ResultsController'
//         })
// });


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
