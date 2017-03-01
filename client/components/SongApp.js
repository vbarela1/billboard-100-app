import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

class SongApp extends React.Component {
  constructor(props){
  super(props);
  this.state = { songs: [] }
 }

componentDidMount () {
  $.ajax({
    url: '/api/billboards',
    type: 'GET',
    dataType: 'JSON'
  }).done( songs => {
    this.setState({ songs })
  })
}

addSong = (song) => {
  $.ajax({
    url: '/api/billboards',
    type: 'POST',
    data: { billboard: { song }}
  }).done( song => {
    this.setState({ songs: [song, ...this.state.songs]});
  });
}

updateSong = (id, name) => {
 $.ajax({
   url: `/api/billboards/${id}`,
   type: 'PUT',
   data: { billboard: { song: name }}
 }).done( song => {
   let songs = this.state.songs.map( s => {
     if (s.id === song.id)
       return song
     return s
   });
   this.setState({ songs })
 });
}

deleteSong = (id) => {
  $.ajax({
    url: `/api/billboards/${id}`,
    type: 'DELETE'
  }).done( () => {
    let songs = this.state.songs.filter( song => song.id !==id )
    this.setState({ songs });
  });
}

render() {
  return (
   <div>
     <SongForm addSong={this.addSong} />
     <SongList
       songs={this.state.songs}
       deleteSong={this.deleteSong}
       updateSong={this.updateSong} />
   </div>
  )
}
}

export default SongApp;
