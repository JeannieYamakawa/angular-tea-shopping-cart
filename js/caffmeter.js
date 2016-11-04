uses jQuery and changes the style of the elements with classes below.
need the var newVal to be equal to the /180


setTimeout(function() {
  var newVal = 170

  $('.gauge--3 .semi-circle--mask').attr({
    style: '-webkit-transform: rotate(' + newVal + 'deg);' +
    '-moz-transform: rotate(' + newVal + 'deg);' +
    'transform: rotate(' + newVal + 'deg);'
   });
}, 1000);
