//
// app.controller('HomeController', ['$scope', '$http', '$routeParams', '$location', 'omdbSearch', function($scope, $http, $routeParams, $location, omdbSearch){
//     $scope.booyah ='booyah';
//
//     $scope.searchOmdb = function(search){
//         //line below is in order to save this.query in the service object in the services.js document
//         omdbSearch.search(search);
//         $location.path('/results')
//     };
// }]
// })
//
//
// app.controller('ResultsController', ['$scope', '$http', '$routeParams', '$location', 'omdbSearch', function($scope, $http, $routeParams,$location, omdbSearch){
//     omdbSearch.results().then(function(stuff){
//         console.log('search results coming from the second controller', stuff.data.Search);
//         var movies = stuff.data.Search;
//     })
// }])


app.controller('HomeController', ['$scope',
'$http',
'$location',
// 'cartPersistence',
function($scope, $http, $location
    // , cartPersistence
){

    $scope.thisbooyah = 'wiring is working!'
}])
