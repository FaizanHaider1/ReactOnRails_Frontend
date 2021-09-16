import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Error404 from "../../Images/assets/404.png";
import { Container, Button } from "reactstrap";
class Error_404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container
          fluid
          className="vh-100 d-flex justify-content-center align-items-center flex-column"
          style={{
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <img src={Error404} alt="" width="200px" />
          <h2 className="mb-3">Error 404 Page not found</h2>
          <button
            className="btn-primary "
            style={{ borderRadius: "8px" }}
            onClick={() => {
              this.props.history.goBack();
            }}
          >
            Go Back
          </button>
        </Container>
      </>
    );
  }
}

export default withRouter(Error_404);