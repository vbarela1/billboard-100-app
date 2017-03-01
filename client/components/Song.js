import React from 'react';

class Song extends React.Component{
 state = { edit: false }

 toggleEdit = () => {
   this.setState({ edit: !this.state.edit })
 }

 handleSubmit = (e) => {
   e.preventDefault();
   this.props.updateSong(this.props.id, this.refs.song.value)
   this.refs.song.value = null
   this.setState({ edit: false })
 }

 render() {
   let {id, song, deleteSong } = this.props
   return(
    <li>
      <h5>{ this.state.edit ?
          <form onSubmit={this.handleSubmit}>
            <input defaultValue={song} ref="song"/>
          </form>
        :
        <span>{song}</span>
      }</h5>
     <br />
     <button className='btn black-text color grey' onClick={ this.toggleEdit }>Edit</button>
     <button className='btn black-text color red accent-4' onClick={ () => deleteSong(id) }>Delete</button>
   </li>
   )
 }
}
export default Song;
