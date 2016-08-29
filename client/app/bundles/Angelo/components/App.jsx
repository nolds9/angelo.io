import React, { Component } from "react"
import Playlists from "./Playlists"
import CurrentPlaylist from './CurrentPlaylist'
import { fetchAllPlaylists } from "../utils/spotify_helpers"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      currentPlaylist: {}
    }
  }

  handleSetCurrent(index){
    let currentPlaylist = this.state.results[index]
    this.setState({
      results: this.state.results,
      currentPlaylist,
    })
  }

  componentDidMount() {
    let component = this;
    fetchAllPlaylists(this.props.user).then(results => {
      component.setState({
        results
      })
    })
  }

  render() {
    return (
      <div>
        <Playlists results={this.state.results}
          onSetCurrent={ (i) => this.handleSetCurrent(i) } />
        <div className="container">
          <CurrentPlaylist playlist={this.state.currentPlaylist} />
        </div>
      </div>
    );
  }
}

export default App
