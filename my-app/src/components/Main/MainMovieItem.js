import React, { Component } from "react";

class MainMovieItem extends Component {
  state = {};
  render() {
    return (
      <div className="movie-item col-md-6 col-lg-4 py-2">
        <figure class="snip1321">
          <div className="d-flex justify-content-center pb-2">
            <img
              src={this.props.img}
              width="300px"
              height="400px"
              alt={this.props.title}
              border="10"
              className="movie-image"
            />
          </div>
          <figcaption>
            <p>{this.props.overview}</p>
          </figcaption>

          <div className="text-center">
            <p className="movie-title">{this.props.title}</p>
            <p className="movie-release-date">
              Release Date: {this.props.release}
            </p>
            <form action={this.props.fullPage}>
              <button type="submit" className="btn btn-secondary">
                More Info
              </button>
            </form>
          </div>
        </figure>
      </div>
    );
  }
}

export default MainMovieItem;
