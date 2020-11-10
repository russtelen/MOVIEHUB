import React, { Component } from "react";
import MainFilter from "./MainFilter";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Movies</h1>
        </div>
        <div className="d-flex justify-content-end">
          <MainFilter />
        </div>
      </div>
    );
  }
}

export default Main;
