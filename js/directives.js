
//     <caffeine-meter caffeinemg="tea.caffeineScale" id="tea._id"></caffeine-meter>

app.directive('caffeineMeter', function(){
    return {
        restrict: 'E',
        scope: {
        caffeinemg: '=',
        id: '='
        },
        templateUrl: '/partials/caffeine-meter-directive.html',
        controller: function($scope){
            console.log($scope)

        }
    }
})

    // app.directive('forEachDisplayedTea', function(){
    //
    // })
