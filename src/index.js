// es6 style imports
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const App = () => {
  return <div className="test">All the React are belong to us!</div>;
};

ReactDOM.render(<App />, document.getElementById('main'));

let seconds = 0;

setInterval(() => {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}, 1000);
