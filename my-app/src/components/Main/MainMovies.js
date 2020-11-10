import React, { Component } from "react";
import MainMovieItem from "./MainMovieItem";

class MainMovies extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <MainMovieItem />
          <MainMovieItem />
          <MainMovieItem />
          <MainMovieItem />
          <MainMovieItem />
          <MainMovieItem />
        </div>
      </div>
    );
  }
}

export default MainMovies;
