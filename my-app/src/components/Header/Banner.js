import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="align-self-center">
          <h1 className="text-center">Movie App</h1>
          <p className="lead text-center">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <form className="form-inline justify-content-center">
            <input
              className="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Search movie..."
              aria-label="Search"
            />
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Banner;
