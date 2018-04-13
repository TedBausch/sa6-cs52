// es6 style imports
import $ from 'jquery';
import './style.css';

// sweet comments bro
$('#main').html('Here we go!');

let seconds = 0;

setInterval(() => {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}, 1000);
