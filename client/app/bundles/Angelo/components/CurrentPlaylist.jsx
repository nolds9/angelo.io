import React, { Component } from 'react'

class CurrentPlaylist extends Component {
  render() {
    let { playlist } = this.props
    if (playlist) {
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
