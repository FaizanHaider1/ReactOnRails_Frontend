import React, { Component } from "react";
import Drop from '../Components/Dropdown'
import {Button} from 'reactstrap'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (e,that) => {
    e.preventDefault()
    window.location.replace(window.location.origin+"/sign_up")
  }
  render() {
    return (
      <>
          <h1 className = "bg-dark text-white pb-1">E-Commerce  { localStorage.getItem('user_name') ? <Drop/> : <Button onClick = {(e) => this.handleClick(e)}  color="outline-warning" style={{"display": "flex","flex-direction": "row-reverse","float": "right", "margin-top": "6px", "margin-right":"5px"}} >Get Register/Login</Button> }</h1>
      </>
    );
  }
}

export default Header;