import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Example = (props) => {
  const history = useHistory();
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  function handleClick(e){
    e.preventDefault()
    axios.request({
        method: 'DELETE',
        url: `http://localhost:5000/users/sign_out`,
        // url: `https://react-on-rails-backend.herokuapp.com/users/sign_out`,
    }).then(function(res){
        localStorage.removeItem('user_name')
        history.push('/login')
    })
    .catch(function(err){
        alert(err.message)
    });

  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} style={{"display": "flex","flex-direction": "row-reverse","float": "right", "margin-top": "6px", "margin-right":"5px"}}>
      <DropdownToggle caret>        
        <i class="fas fa-user" ></i>
      </DropdownToggle>
      <DropdownMenu>
          <DropdownItem onClick = {(e) => handleClick(e)}>Log out</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;