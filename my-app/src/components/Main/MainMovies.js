import React, { Component } from "react";
import MainMovieItem from "./MainMovieItem";
import MainSearch from "./MainSearch";

const API_KEY = process.env.REACT_APP_API_KEY;

function displayMovie(movie) {
  return (
    <MainMovieItem
      key={movie.id}
      img={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
      title={movie.title}
      release={movie.release_date}
      overview={movie.overview}
      fullPage={`https://www.themoviedb.org/movie/${movie.id}`}
    />
  );
}

class MainMovies extends Component {
  state = {
    isLoaded: false,
    movies: [],
  };

  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate() {
    this.updateMovies();
  }

  updateMovies() {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.filterUrl}?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        this.setState({
          isLoaded: true,
          movies: json.results,
        });
      });
  }

  // searchMovies() {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       // console.log(json);
  //       this.setState({
  //         isLoaded: true,
  //         // results: json.results,
  //       });
  //     });
  // }

  render() {
    //destructuring
    const { isLoaded, movies } = this.state;

    if (!isLoaded) {
      return <p> Page is Loading..</p>;
    } else {
      return (
        <React.Fragment>
          <div className="mb-5">
            <MainSearch />
          </div>
          <div className="container">
            <div
              className="row"
              uk-scrollspy="cls: uk-animation-slide-right; target: .movie-item; delay: 150; repeat: true"
            >
              {movies.map(displayMovie)}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MainMovies;
