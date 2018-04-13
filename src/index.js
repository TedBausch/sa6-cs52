// es6 style
import $ from 'jquery';
// sweet comments bro
$('#main').html('Here we go!');

let seconds = 0;

setInterval( () => {
      seconds += 1;
      $('#main').html("You've been on this page for " + seconds + " seconds.");
    }, 1000);
