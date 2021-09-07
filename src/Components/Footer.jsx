import React, { Component } from "react";
import { Container } from "reactstrap";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="bg-dark text-light py-2 mt-auto">
        <Container>
            www.store.online.com.pk
        </Container>
      </footer>
    );
  }
}

export default Footer;