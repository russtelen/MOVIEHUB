import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div
          className="align-self-center"
          uk-scrollspy="cls:uk-animation-slide-bottom; repeat: true"
        >
          <h1 className="text-center">MovieHub</h1>
          <p className="lead text-center">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
