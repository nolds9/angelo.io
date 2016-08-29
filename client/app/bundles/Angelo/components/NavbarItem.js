import React, { Component } from 'react'

class NavbarItem extends Component {
  render() {
    let { text, link } = this.props
    return (
      <li className="item" ><a href={link}>{text}</a></li>
    )
  }
}

export default NavbarItem
