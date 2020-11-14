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

{
  /* <figure class="snip1321"><img class="landing__program-img" src="images/landing/program-females.jpg" alt="females only program">
                <figcaption>
                  <h4 class="landing__text-header">Females Only</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In perferendis dolor quos nostrum ipsum, illum expedita labore magnam unde quia officia deleniti. Rem ea cum provident tempora qui magni</p>
                </figcaption><a href="pages/program.html"></a>
                <h4 class="landing__text-header">Females Only</h4>
              </figure> */
}
