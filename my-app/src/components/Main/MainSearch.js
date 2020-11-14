import React, { Component } from "react";

class MainSearch extends Component {
  state = {};

  render() {
    return (
      <form className="form-inline justify-content-center">
        <input
          className="form-control form-control-lg mr-sm-2 w-50"
          type="text"
          placeholder="Search movie..."
          aria-label="Search"
        />
        <button className="btn btn-outline-dark my-2 my-sm-0">Search</button>
      </form>
    );
  }
}

export default MainSearch;
