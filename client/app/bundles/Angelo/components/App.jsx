import React, { Component } from "react"
import PlaylistContainer from "../containers/PlaylistContainer"
import CurrentPlaylist from './CurrentPlaylist'
import Navbar from './Navbar'
import Paper from 'material-ui/Paper';


const style = {
  height: "inherit",
  width: "85%",
  marginLeft: "4em",
  marginTop: 25,
  textAlign: 'center',
  display: 'inline-block',
};


class App extends Component {
  constructor(props) {
    super(props)
    let { data, user } = this.props
    this.state = {
      user,
      results: data,
      currentPlaylist: null,
      drawerOpen: false
    }
  }

  handleSetCurrent(index){
    let currentPlaylist = this.state.results[index]
    this.setState(Object.assign(this.state, {
      results: this.state.results,
      currentPlaylist,
    }))
    this.handleToggleDrawer()
  }

  handleToggleDrawer(e){
    let drawerOpen = !this.state.drawerOpen
    this.setState(Object.assign(this.state, {
      drawerOpen,
    }))
  }
  render() {
    let currentPlaylistStyle = this.state.currentPlaylist ? style : {display: "none"}
    return (
      <div className="container">
        <Navbar
          user={this.state.user}
          handleToggleDrawer={ e => this.handleToggleDrawer(e) } />
        <PlaylistContainer
          playlists={this.state.results}
          open={this.state.drawerOpen}
          onToggleDrawer={ e => this.handleToggleDrawer(e) }
          onSetCurrent={ (i) => this.handleSetCurrent(i) } />
        <Paper style={currentPlaylistStyle} zDepth={3}>
          <CurrentPlaylist playlist={this.state.currentPlaylist} />
        </Paper>
      </div>
    )
  }
}

export default App
