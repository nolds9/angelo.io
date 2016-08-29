import React, { Component } from 'react'

class CurrentPlaylist extends Component {
  render() {
    let { playlist } = this.props
    console.log(playlist);
    let isNotEmpty = Object.keys(playlist).length > 0 && playlist.constructor === Object
    if (isNotEmpty) {
      let imageSrc = playlist.images[0] ? playlist.images[0].url : ""
      return (
        <div className="current-playlist">
          <h3>{playlist.name}</h3>
          <img src={imageSrc} alt={playlist.name} />
          <p>{playlist.tracks.total} tracks</p>
        </div>
      )
    } else { return <p></p> }
  }
}

export default CurrentPlaylist;
