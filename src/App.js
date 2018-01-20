import React, { Component } from 'react';
import NavBar from "./components/NavigationBar";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[]
    };
  }
  render() {
    const {videos} = this.state;
    return (
      <div className="youtube-clone">
        <NavBar />
        <VideoDetail videos={videos[0]}/>
        <VideoList videos={videos}/>
      </div>
    );
  }
}

export default App;
