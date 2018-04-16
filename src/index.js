// es6 style imports
// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // no state yet
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
