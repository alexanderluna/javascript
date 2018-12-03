import React from 'react';
import './VideoItem.css';

class VideoItem extends React.Component {

    selectVideo = () => {
        this.props.onVideoSelect(this.props.video);
    }

    render() {
        const { video } = this.props;
        return (
            <div className="video-item item" onClick={this.selectVideo}>
                <img
                    className="ui image"
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
            </div>
        )
    }
}

export default VideoItem;