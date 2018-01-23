import React, { Component } from 'react';
import NavBar from "./components/NavigationBar";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import { ApiKey } from './Config';
import { Loader, Grid } from 'semantic-ui-react';
import './styles/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo: {},
      isLoading: false,
      term: ''
    };

    this.onVideoSelect = this.onVideoSelect.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

    this.videoSearch('ntv uganda live');
  }

  videoSearch(term){
    YTSearch({key: ApiKey, term: term}, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  onVideoSelect(selectedVideo){
    // this function updates the selectedVideo object in
    // the application state. This function is passed on
    // to the VideoList component as a component as a prop
    // which is called once a user selects/clicks on a video
    // in the list to view.
    this.setState({selectedVideo});
  }

  onSearchChange(event, {value}){
    this.setState({isLoading: true});
    // handler for search input text change
    this.setState({term: value});
    // call video search with the new search term
    this.videoSearch(value);
    this.setState({isLoading: false});
  }

  render() {
    const { videos, selectedVideo, term, isLoading } = this.state;
    if(videos.length === 0){
      return(
        <div className="yt-app-spinner">
          <Loader
            active inline="centered" 
          />
        </div>
      );
    }
    return (
      <div className="youtube-clone">
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={16}>
              <NavBar
                term={term}
                isLoading={isLoading}
                onSearchChange={this.onSearchChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <VideoDetail video={selectedVideo}/>
            </Grid.Column>
            <Grid.Column width={6}>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={videos}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
