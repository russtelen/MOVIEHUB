import React, { Component } from "react";
import MainFilter from "./MainFilter";
import MainMovies from "./MainMovies";
import MainSearch from "./MainSearch";

class Main extends Component {
  state = {
    filterUrl: "popular",
  };

  syncData = (childData) => {
    this.setState({ filterUrl: childData });
  };

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
            <MainSearch />
          </div>

          <div className="d-flex justify-content-end">
            <MainFilter transferData={this.syncData} />
          </div>
        </div>

        <div className="movies">
          <MainMovies filterUrl={this.state.filterUrl} />
        </div>
      </div>
    );
  }
}

export default Main;
