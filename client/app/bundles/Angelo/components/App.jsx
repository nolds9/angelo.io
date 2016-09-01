import React, { Component } from "react"
import PlaylistContainer from "../containers/PlaylistContainer"
import CurrentPlaylist from './CurrentPlaylist'
import Loading from './Loading'
import Navbar from './Navbar'
import Paper from 'material-ui/Paper';
import { fetchRecommendations } from '../utils/spotify_helpers'

const style = {
  height: "500px",
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
    this.refreshState = this.refreshState.bind(this)
    this.state = {
      user,
      results: data,
      currentPlaylist: null,
      drawerOpen: false,
      recommendations: [],
      loading: false,
    }
  }

  handleSetCurrent(index){
    this.toggleLoading()
    let currentPlaylist = this.state.results[index]
    if(currentPlaylist) {
      let component = this;
      fetchRecommendations(currentPlaylist.id).then(recommendations => {
        component.setState(Object.assign(component.state, {
          currentPlaylist,
          recommendations,
          loading: false,
        }))
      })
    }
    this.handleToggleDrawer()
  }

  toggleLoading(){
    let loading = true
    this.setState(Object.assign(this.state, {
      loading,
    }))
  }

  refreshState(){
    this.setState(Object.assign(this.state, {
      currentPlaylist: null,
      drawerOpen: false,
      loading: false,
    }))
  }

  handleToggleDrawer(e){
    let drawerOpen = !this.state.drawerOpen
    this.setState(Object.assign(this.state, {
      drawerOpen,
    }))
  }
  render() {
    let displayLoading = this.state.currentPlaylist ? style : {display: "none"}
    return (
      <div className="container">
        <Navbar
          handleClickLogo={ this.refreshState }
          user={this.state.user}
          handleToggleDrawer={ e => this.handleToggleDrawer(e) } />
        <PlaylistContainer
          playlists={this.state.results}
          open={this.state.drawerOpen}
          onToggleDrawer={ e => this.handleToggleDrawer(e) }
          onSetCurrent={ (i) => this.handleSetCurrent(i) } />
        <div>
          {!this.state.loading
          ? <Paper style={displayLoading} zDepth={3}>
              <CurrentPlaylist
                playlist={this.state.currentPlaylist}
                loading={this.state.loading}
                recommendations={this.state.recommendations} />
            </Paper>
          : <Paper style={style} zDepth={3}>
              <Loading text={"Generating Magic"} speed={300} />
            </Paper>
          }
        </div>
      </div>
    )
  }
}

export default App
