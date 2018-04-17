// es6 style imports
// import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import debounce from 'lodash.debounce';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import './style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.search = (text) => {
      youtubeSearch(text).then((videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
    };

    this.search = debounce(this.search, 300);

    this.search('pixar');
  }


  render() {
    return (
      <div>
        <SearchBar id="search-bar" onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail id="video-detail" video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
