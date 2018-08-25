import * as vars from './vars.js';

var cutoff = '0';

var sizeMap = new Map();
sizeMap.set('sm', vars.Sm);
sizeMap.set('md', vars.Md);
sizeMap.set('lg', vars.Lg);
sizeMap.set('xl', vars.Xl);

cutoff = sizeMap.get(vars.LongIntro);

// Use same cutoff math as Bootstrap for media query
var shortCutoff = String(parseFloat(cutoff) - 0.02) + "px"

var intro = document.getElementById("intro");
var short = window.matchMedia("(max-width: " + shortCutoff + ")");


var portrait = document.getElementById("portrait");

function testShort(short) {
    if (short.matches) { // If media query matches
      intro.style.height = String(window.innerHeight) + "px";
      portrait.style.maxHeight = vars.LargePortrait + 'px';
      console.log(portrait.style.maxHeight);
    } else {
      intro.style.height = "auto";
    }
}

testShort(short); // Call listener function at run time
short.addListener(testShort); // Attach listener function on state changes

var bigQuery = "(min-width: " + cutoff + "px) and (min-height: " + vars.PortraitCutoff + "px)";
var big = window.matchMedia(bigQuery);

function testBig(big) {
    if (big.matches) { // If media query matches
      portrait.style.maxHeight = vars.LargePortrait + 'px';
    } else {
      if (!short.matches){
        portrait.style.maxHeight = vars.SmallPortrait + 'px';    
      }
    }
}

testBig(big); // Call listener function at run time
big.addListener(testBig); // Attach listener function on state changes


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
