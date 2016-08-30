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
};

function handleActive(tab) {
  // launch spotify webplayer
}

class CurrentPlaylist extends Component {
  render() {
    let { playlist } = this.props
    console.dir(playlist)
    if (playlist) {
      let imageSrc = playlist.images[0] ? playlist.images[0].url : ""
      return (
        <div className="container">
            <Tabs>
              <Tab label={playlist.name}>
                <div style={ styles.centerCard }>
                  <h1 style={styles.headline}>{playlist.name}</h1>
                  <img src={imageSrc} />
                </div>
              </Tab>
              <Tab label="Songs" >
                <div style={ styles.centerCard }>
                  <h2 style={styles.headline}>Songs</h2>
                  <p>
                    {playlist.tracks.total} songs
                  </p>
                </div>
              </Tab>
              <Tab
                label="Play"
                data-route="/home"
                onActive={handleActive}
              >
                <div style={ styles.centerCard }>
                  <h2 style={styles.headline}>Tab Three</h2>
                  <p>
                    Go to spotify
                  </p>
                </div>
              </Tab>
            </Tabs>
        </div>
      )
    } else { return <p></p> }
  }
}

export default CurrentPlaylist;
