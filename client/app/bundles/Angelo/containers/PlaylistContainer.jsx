import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    let {onSetCurrent, playlists} = this.props
    let menu = playlists.map( (playlist, i) => {
      return (
        <MenuItem key={i}>
          <span onClick={ e => onSetCurrent(i) }>{playlist.name}</span>
        </MenuItem>
      )
    })
    return (
      <div>
        <RaisedButton
          label="Choose Playlist"
          onTouchTap={this.handleToggle}
        />
      <Drawer width={300} openSecondary={true} open={this.state.open} >
        {menu}
      </Drawer>
      </div>
    );
  }
}

export default PlaylistContainer
