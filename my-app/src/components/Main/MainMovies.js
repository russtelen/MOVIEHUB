import React, { Component } from "react";
import MainMovieItem from "./MainMovieItem";

function displayMovie(movie) {
  return (
    <MainMovieItem
      key={movie.id}
      img={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
      title={movie.title}
      release={movie.release_date}
    />
  );
}

class MainMovies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          movies: json.results,
        });
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="container">
        <div className="row">
          {movies.map(displayMovie)}
          {/* {movies.forEach((m) => displayMovie(m))} */}
        </div>
      </div>
    );
  }
}

export default MainMovies;
