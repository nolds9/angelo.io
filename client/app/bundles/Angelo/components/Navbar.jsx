import React, { Component } from 'react'
import NavbarItem from './NavbarItem'

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <NavbarItem text="Link 1" link="#" />
              <NavbarItem text="Link 2" link="#" />
              <NavbarItem text="Link 3" link="#" />
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
