import React, { Component } from "react";
import Banner from "./Banner";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <Nav /> */}
        <Banner />
      </React.Fragment>
    );
  }
}

export default Header;
