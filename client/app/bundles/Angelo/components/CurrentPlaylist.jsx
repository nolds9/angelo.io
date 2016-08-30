import React, { Component } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import FontIcon from 'material-ui/FontIcon'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  centerCard: {
    textAlign: 'center',
    marginBottom: "1em",
  }
}

class CurrentPlaylist extends Component {
  render() {
    let { playlist } = this.props
    console.dir(playlist)
    if (playlist) {
      let imageSrc = playlist.images[0] ? playlist.images[0].url : ""
      let uris = playlist.recommendations.join(",")
      let recSrc = playlist.recommendations.length > 0 ? `https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:${uris}` : ""
      let playerSrc = playlist && playlist.uri ? `https://embed.spotify.com/?uri=${playlist.uri}` : ""
      return (
        <div className="container">
          <Tabs>
            <Tab label={playlist.name}>
              <div style={ styles.centerCard }>
                <h1 style={styles.headline}>{playlist.name}</h1>
                <p style={styles.headline}>{playlist.tracks.total} songs</p>
                <img src={imageSrc} />
              </div>
            </Tab>
            <Tab label="Play" >
              <div style={ styles.centerCard }>
                <h2 style={styles.headline}>Now Playing</h2>
                <iframe
                  src={playerSrc}
                  width="300"
                  height="380"
                  frameBorder="0"
                  allowTransparency="true">
                </iframe>
              </div>
            </Tab>
            <Tab label="Recommendations" >
              <div style={ styles.centerCard }>
                <h2 style={styles.headline}>You Might Like</h2>
                  <iframe
                    src={recSrc}
                    width="300"
                    height="380"
                    frameBorder="0"
                    allowTransparency="true">
                  </iframe>
              </div>
            </Tab>
          </Tabs>
        </div>
      )
    } else { return <p></p> }
  }
}

export default CurrentPlaylist;
