import React, { Component } from "react";

class MainMovieItem extends Component {
  state = {};
  render() {
    return (
      <div className="movie-item col-md-6 col-lg-4 py-2">
        <div className="d-flex justify-content-center pb-2">
          <img
            src={this.props.img}
            width="300px"
            height="400px"
            alt="Image is not loaded"
            border="10"
            className="movie-image"
          />
        </div>

        <div className="text-center">
          <p className="movie-title">{this.props.title}</p>
          <p className="movie-release-date">
            Release Date: {this.props.release}
          </p>
          <button className="btn btn-secondary">More Info</button>
        </div>
      </div>
    );
  }
}

export default MainMovieItem;
