import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';

const VideoList = ({videos, onVideoSelect}) => {
    const videosItems = videos.map((video) => {
        return(
            <VideoListItem
                onVideoSelect={onVideoSelect}
                key={video.etag} 
                video={video}
            />
        );
    });
    return(
        <List>
            {videosItems}
        </List>
    );
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired,
    onVideoSelect: PropTypes.func.isRequired
};

export default VideoList;