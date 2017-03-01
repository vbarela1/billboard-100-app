import React from 'react';
import Song from './Song';

const SongList = ({ songs, updateSong, deleteSong }) => (
  <ul>
    { songs.map( song => {
      return (<Song key={song.id} {...song} deleteSong={deleteSong} updateSong={updateSong} />)
    
    })
 }
 </ul>
 )

 export default SongList;
