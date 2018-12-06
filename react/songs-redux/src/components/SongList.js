import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import SongItem from './SongItem';

class SongList extends React.Component {

    selectSong = (song) => {
        this.props.selectSong(song)
    }

    render() {
        return (
            <div className="ui divided list">
                {this.props.songs.map(song =>
                    <SongItem
                        key={song.title}
                        song={song}
                        selectSong={this.selectSong}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);