import React, { Component } from "react";
import Drop from '../Components/Dropdown'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
          <h1 className = "bg-dark text-white pb-1">E-Commerce  { localStorage.getItem('user_name') && <Drop/> }</h1>
      </>
    );
  }
}

export default Header;