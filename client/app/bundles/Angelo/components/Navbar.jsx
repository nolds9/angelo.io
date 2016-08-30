import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

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
    let { user } = this.props
    return (
      <AppBar
        title={<span style={styles.title}>Angelo.io</span>}
        onTitleTouchTap={ e => this.onTouchTap(e) }
        iconElementLeft={<IconButton></IconButton>}
        iconElementRight={
          <div>
            <FlatButton
              style={ { color: "white" } }
              label="Logout"
              href="/logout"  />
            <RaisedButton label="Playlists"onTouchTap={ e => this.onToggle(e) } />
          </div>
        }
      />
    )
  }
}

export default Navbar
