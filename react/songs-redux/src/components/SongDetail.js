import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    return (
        <div>
            {!song && <div>Select a Song</div>}
            {song &&
                <div>
                    <h3>Detail for:</h3>
                    <p>
                        Title: {song.title}
                        <br />
                        Duration: {song.duration}
                    </p>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}
export default connect(mapStateToProps)(SongDetail);