import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Beat it', duration: '3:50' },
        { title: 'Für Elise', duration: '10:24' },
        { title: 'Stairway to heaven', duration: '4:10' },
        { title: 'Spirited Away', duration: '3:32' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})