import React from 'react';

class SongItem extends React.Component {
    render() {
        const { song, selectSong } = this.props;
        return (
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button
                        className="ui button primary"
                        onClick={() => selectSong(song)}>
                        Select
                    </button>
                </div>
                <div className="content">
                    {song.title}: {song.duration}
                </div>
            </div>
        )
    }
}

export default SongItem;