import React, { Component } from "react";

class MainFilter extends Component {
  state = {};
  render() {
    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Highest Rated
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="index.html">
            Highest Rated
          </a>
          <a className="dropdown-item" href="index.html">
            Recently Released
          </a>
          <a className="dropdown-item" href="index.html">
            Coming Soon
          </a>
        </div>
      </div>
    );
  }
}

export default MainFilter;
