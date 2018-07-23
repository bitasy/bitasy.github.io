import * as vars from './vars.js';

var cutoff = '0';

switch (vars.LongIntro) {
  case 'sm':
    cutoff = vars.Sm;
    break;
  case 'md':
    cutoff = vars.Md;
    break;
  case 'lg':
    cutoff = vars.Lg;
    break;
  case 'xl':
    cutoff = vars.Xl;
    break;
}

// Use same cutoff math as Bootstrap for media query
cutoff = String(parseFloat(cutoff) - 0.02) + "px"

var intro = document.getElementById("intro");
console.log(cutoff);
var x = window.matchMedia("(max-width: " + cutoff + ")")

function myFunction(x) {
    if (x.matches) { // If media query matches
      console.log("match")
      intro.style.height = String(window.innerHeight) + "px";
    } else {
      console.log(x)
    }
}

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
/*
$(document).ready(function () {
    var $horizontal = $('#test');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        var position = (scrollPercent * ($(document).width() - $horizontal.width()));

        $horizontal.css({
            'margin-left': position
        });
    });
});
*/
