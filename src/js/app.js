import * as vars from './vars.js';

var cutoff = '0';

var sizeMap = new Map();
sizeMap.set('sm', vars.Sm);
sizeMap.set('md', vars.Md);
sizeMap.set('lg', vars.Lg);
sizeMap.set('xl', vars.Xl);

cutoff = sizeMap.get(vars.LongIntro);

// Use same cutoff math as Bootstrap for media query
cutoff = String(parseFloat(cutoff) - 0.02) + "px"

var intro = document.getElementById("intro");
var x = window.matchMedia("(max-width: " + cutoff + ")")

function myFunction(x) {
    if (x.matches) { // If media query matches
      intro.style.height = String(window.innerHeight) + "px";
    } else {
      intro.style.height = "auto";
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
