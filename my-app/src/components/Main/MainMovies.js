import React, { Component } from "react";
import MainMovieItem from "./MainMovieItem";

const API_KEY = process.env.REACT_APP_API_KEY;

function displayMovie(movie) {
  return (
    <MainMovieItem
      key={movie.id}
      img={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
      title={movie.title}
      release={movie.release_date}
      overview={movie.overview}
    />
  );
}

class MainMovies extends Component {
  state = {
    isLoaded: false,
    movies: [],
  };

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoaded: true,
          movies: json.results,
        });
      });
  }

  render() {
    //destructuring
    const { isLoaded, movies } = this.state;

    if (!isLoaded) {
      return <p> Page is Loading..</p>;
    } else {
      return (
        <div className="container">
          <div
            className="row"
            uk-scrollspy="cls: uk-animation-slide-right; target: .movie-item; delay: 150; repeat: true"
          >
            {movies.map(displayMovie)}
          </div>
        </div>
      );
    }
  }
}

export default MainMovies;
