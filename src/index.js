// es6 style imports
// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    youtubeSearch('pixar').then((videos) => {
      this.setState({
        videos,
        // selectedVideo: videos[0],
      });
    });

    this.state = {
      videos: [],
      // selectedVideo: null,
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
