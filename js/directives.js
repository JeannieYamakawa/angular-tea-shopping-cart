//
// //     <caffeine-meter caffeinemg="tea.caffeineScale" id="tea._id"></caffeine-meter>
//
// app.directive('caffeineMeter', function(){
//     return {
//         restrict: 'E',
//         scope: {
//         caffeinemg: '=',
//         id: '='
//         },
//         templateUrl: '/partials/caffeine-meter-directive.html',
//         link: function(scope, element, attributes){
//             console.log(scope, element, attributes)
//             if(scope.caffeinemg>180){
//                 scope.rating = 'HIGH'
//             }
//             if(scope.caffeinemg<180&& scope.caffeinemg>80){
//                 scope.rating = 'MEDIUM'
//             }
//             if(scope.caffeinemg<80){
//                 scope.rating = 'LOW'
//             }
//
//             var gaugeReading = Math.floor((scope.caffeinemg)/1.6);
//             var gaugeElements = <div id='" +scope.id+"' class ='gauge'>
//                             <div class="mask">
//                               <div class="semi-circle"></div>
//                               <div class="semi-circle--mask"></div>
//                             </div>
//                         </div>
//
//                         var lastGaugeSectionIndex = $('.gauge-section').length-1;
//                         var selectedGaugeSection = $('.gauge-section')[lastGaugeSectionIndex]
//
//                         $(selectedGaugeSection).append(gaugeElements);
//
//                         var selectedMeter = $('#'+ scope.id + 'semi-circle--mask')
//
//         setTimeout(function() {
//           var newVal = 170
//
//          selectedMeter.attr({
//             style: '-webkit-transform: rotate(' + newVal + 'deg);' +
//             '-moz-transform: rotate(' + newVal + 'deg);' +
//             'transform: rotate(' + newVal + 'deg);'
//            });
//         }, 1000);
//
//         }
//     }
// })
