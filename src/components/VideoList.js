import React from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
    const videosItems = videos.map((video) => {
        return <VideoItem key={video.etag} video={video}/>;
    });
    return(
        <List>
            {videosItems}
        </List>
    );
};

VideoList.propTypes = {
    videos: PropTypes.array.isRequired
};

export default VideoList;