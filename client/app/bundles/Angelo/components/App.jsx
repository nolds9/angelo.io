import React, { Component } from "react"
import PlaylistContainer from "../containers/PlaylistContainer"
import CurrentPlaylist from './CurrentPlaylist'
import Navbar from './Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    let { data } = this.props
    this.state = {
      results: data,
      currentPlaylist: null,
    }
  }

  handleSetCurrent(index){
    let currentPlaylist = this.state.results[index]
    this.setState({
      results: this.state.results,
      currentPlaylist,
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <PlaylistContainer playlists={this.state.results}
          onSetCurrent={ (i) => this.handleSetCurrent(i) } />
        <CurrentPlaylist playlist={this.state.currentPlaylist} />
      </div>
    );
  }
}

export default App
