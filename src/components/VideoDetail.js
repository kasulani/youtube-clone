import React from 'react';
import { Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const VideoDetail = ({video}) => {
    // this component renders the details of a single
    // selected details
    const {thumbnails} = video.snippet;
    return(
        <div className="video-details">
            <div className="video-player">
                <Embed
                    id={video.id.videoId}
                    placeholder={thumbnails.high.url}
                    source="youtube"
                />
            </div>
            <div className="yt-video-info">
                <div className="video-title">{video.snippet.title}</div>
                <div className="video-description"><small>{video.snippet.description}</small></div>
            </div>
        </div>
    );
};

VideoDetail.propTypes = {
    video: PropTypes.object.isRequired
};

export default VideoDetail;