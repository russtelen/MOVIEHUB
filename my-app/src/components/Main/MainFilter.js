import React, { Component } from "react";

class MainFilter extends Component {
  state = {
    filter: null,
  };

  handleFormChange = (e) => {
    console.log(e.target.value);
    this.props.transferData(e.target.value);
  };

  render() {
    return (
      <div className="dropdown mb-4">
      
      <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Popular
        </button> 
       

      <form onChange={(e) => this.handleFormChange(e)}>
        <select className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <option value="popular" className="dropdown-item">
            Popular
          </option>
          <option value="top_rated" className="dropdown-item">
            Highest Rated
          </option>
          <option value="now_playing" className="dropdown-item">
            Recently Released
          </option>
          <option value="upcoming" className="dropdown-item">
            Coming Soon
          </option>
        </select>
      </form>
      <div/>
    );
  }
}

export default MainFilter;
