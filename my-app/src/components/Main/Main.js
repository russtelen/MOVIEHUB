import React, { Component } from "react";
import MainFilter from "./MainFilter";
import MainMovies from "./MainMovies";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1
              className="display-3"
              uk-scrollspy="cls: uk-animation-slide-right; repeat: true"
            >
              Movies
            </h1>
          </div>

          <div className="d-flex justify-content-end">
            <MainFilter />
          </div>
        </div>

        <div className="movies">
          <MainMovies />
        </div>
      </div>
    );
  }
}

export default Main;
