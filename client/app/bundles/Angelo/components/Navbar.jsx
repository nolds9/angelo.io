import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class Navbar extends Component {
  onTouchTap(e){
    console.log("Go Home");
  }

  onToggle(e){
    e.preventDefault()
    let { handleToggleDrawer } = this.props
    handleToggleDrawer(e)
  }

  render() {
    return (
      <AppBar
        title={<span style={styles.title}>Angelo.io</span>}
        onTitleTouchTap={ e => this.onTouchTap(e) }
        iconElementLeft={<IconButton></IconButton>}
        iconElementRight={<RaisedButton label="Playlists"onTouchTap={ e => this.onToggle(e) } />}
      />
    )
  }
}

export default Navbar
