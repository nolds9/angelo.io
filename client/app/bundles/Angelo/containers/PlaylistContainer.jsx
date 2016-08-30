import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider'

class PlaylistContainer extends Component {
  render() {
    let {onSetCurrent, playlists, open, onToggleDrawer} = this.props
    let menu = playlists.map( (playlist, i) => {
      return (
        <MenuItem onClick={ e => onSetCurrent(i) } key={i}>
          <span>{playlist.name}</span>
          <Divider />
        </MenuItem>
      )
    })
    return (
      <div>
        <Drawer width={300}
          openSecondary={true}
          docked={false}
          open={open}
          onRequestChange={ open  => onToggleDrawer(open) }
        >
          {menu}
        </Drawer>
      </div>
    );
  }
}

export default PlaylistContainer
