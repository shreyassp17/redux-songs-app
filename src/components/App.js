import React from 'react';
import SongList from './SongList';
// import { selectSong } from '../actions' //Curly braces indicate that we want to specifically import a named export from that file.
import SongDetail from './SongDetail';

export default function App() {
  return (
    <div className = "ui container grid">
      <div className="ui row">
      <div className="column eight wide">
      <SongList />
      </div>
      <div className="column eight wide">
        <SongDetail/>
      </div>
      </div>
    </div>
  );
}
