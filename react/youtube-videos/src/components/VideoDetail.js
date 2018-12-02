import React from 'react';

class VideoDetail extends React.Component {
    render() {
        const { id, snippet } = this.props.video;
        const videoSource = `https://www.youtube.com/embed/${id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe title={snippet.title} src={videoSource} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{snippet.title}</h4>
                    <p>{snippet.description}</p>
                </div>
            </div>
        )
    }
}

export default VideoDetail