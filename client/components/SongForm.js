import React from 'react';

const SongForm = ({addSong}) => {
  let song;
  return (
    <div>
    <form
      onSubmit={ e => {
      e.preventDefault();
      addSong(song.value)
      song.value = null;
    }}
  >
    <input placeholder="Add a Song" ref={ n => song = n }/>
    <input type='submit' className='btn black-text color cyan accent-4' />
  </form>
  </div>
  )
}

export default SongForm;
