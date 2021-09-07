import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <h1 className = "bg-dark text-white pb-1">E-Commerce</h1>
    );
  }
}

export default Header;