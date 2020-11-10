import React, { Component } from "react";

class MainMovieItem extends Component {
  state = {};
  render() {
    return (
      <div className="movie-item col-md-6 col-lg-4 py-2">
        <div className="d-flex justify-content-center">
          <img
            src="https://1.bp.blogspot.com/-zXwrowTem0M/Xj3xuRee9SI/AAAAAAAABqQ/JKCg_K_ObTY26HhXI1JGcPtR5NLErWE8wCLcBGAsYHQ/s1600/sea-4810958_1280.jpg"
            width="300px"
            height="400px"
            alt="Image is not loaded"
            border="10"
          />
        </div>

        <div className="text-center">
          <p>Title</p>
          <p>Release Date</p>
          <button className="btn btn-secondary">More Info</button>
        </div>
      </div>
    );
  }
}

export default MainMovieItem;
