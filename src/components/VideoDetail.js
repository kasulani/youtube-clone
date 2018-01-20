import React from 'react';
import { Embed } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const VideoDetail = ({video}) => {
    // this component renders the details of a single
    // selected details
    return(
        <div className="video-details">
            <div className="video-player">
                <Embed />
            </div>
            <div className="video-info">
                <div className="video-title">video tile here</div>
                <div className="video-description">video description</div>
            </div>
        </div>
    );
};

VideoDetail.propTypes = {
    video: PropTypes.object.isRequired
};

export default VideoDetail;