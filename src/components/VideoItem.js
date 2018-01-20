import React from 'react';
import { List, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const VideoItem = ({video}) => {
    let ImageUrl;
    return(
        <List.Item>
            <Image  src={ImageUrl} />
            <List.Content>
                <List.Header>video title</List.Header>
                <List.Description> video description</List.Description>
            </List.Content>
        </List.Item>
    );
};

VideoItem.propTypes = {
    video: PropTypes.object.isRequired
};

export default VideoItem;