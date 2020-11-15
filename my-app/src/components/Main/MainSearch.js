import React, { Component } from "react";

class MainSearch extends Component {
  state = {
    query: "",
    results: [],
  };

  handleSearch = (e) => {
    e.preventDefault();
    console.log(e.search);
  };

  handleChange = () => {
    // console.log(this.search.value);
    this.setState({ query: this.search.value });
  };

  render() {
    return (
      <form className="form-inline justify-content-center">
        <input
          className="form-control form-control-lg mr-sm-2 w-50"
          type="search"
          placeholder="Search movie..."
          aria-label="Search"
          ref={(input) => (this.search = input)}
          onChange={this.handleChange}
        />
        <button
          onClick={(e) => this.handleSearch(e)}
          className="btn btn-outline-dark my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}

export default MainSearch;
