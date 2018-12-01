import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount = () => {
        this.onFormSubmit('jazz');
    }

    onFormSubmit = async (term) => {
        const response = await youtube.get('/search', { params: { q: term } });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
        console.log(video);
    }

    render() {
        const { videos, selectedVideo } = this.state;
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
