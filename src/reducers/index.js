import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Hotline Bling', duration: '4:05'},
        {title: 'Peaches', duration: '3:00'},
        {title: 'Gerua', duration: '2:56'},
        {title: 'Tum hi ho', duration: '3:59'}
     ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});