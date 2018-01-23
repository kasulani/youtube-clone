import React from 'react';
import { List, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const VideoListItem = ({video, onVideoSelect}) => {
    const {thumbnails} = video.snippet;
    return(
        <div className="yt-video-item">
            <List.Item onClick={function(){onVideoSelect(video);}}>
                <Image  size="small" src={thumbnails.medium.url} className="left floated"/>
                <List.Content>
                    <List.Header>{video.snippet.title}</List.Header>
                </List.Content>
                <div style={{ "clear": "both" }} />
            </List.Item>
        </div>
    );
};

VideoListItem.propTypes = {
    video: PropTypes.object.isRequired,
    onVideoSelect: PropTypes.func.isRequired
};

export default VideoListItem;