import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
        error: null
    };

    componentDidMount = () => {
        this.onFormSubmit('jazz');
    }

    onFormSubmit = async (term) => {
        try {
            const res = await youtube.get('/search', { params: { q: term } });
            this.setState({
                videos: res.data.items,
                selectedVideo: res.data.items[0],
                errorMessage: null
            });
        } catch ({ message }) {
            this.setState({ errorMessage: message });
        }
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
        console.log(video);
    }

    render() {
        const { videos, selectedVideo, errorMessage } = this.state;
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {
                                selectedVideo
                                && <VideoDetail video={selectedVideo} />
                            }
                            {
                                errorMessage
                                && <h2>{errorMessage}</h2>
                            }
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
