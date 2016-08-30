import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';


class Navbar extends Component {
  handleTouchTap(e){

  }

  render() {
    return (
      <AppBar title="Angelo.io"
        onTitleTouchTap={e => this.handleTouchTap(e) }
        />
    )
  }
}

export default Navbar
