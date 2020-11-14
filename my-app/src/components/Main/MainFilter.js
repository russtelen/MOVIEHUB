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
      <div className="mb-4">
        <form onChange={(e) => this.handleFormChange(e)}>
          <select>
            <option value="popular">Most Popular</option>
            <option value="top_rated">Highest Rated</option>
            <option value="now_playing">Recently Released</option>
            <option value="upcoming">Coming Soon</option>
          </select>
        </form>
      </div>
    );
  }
}

export default MainFilter;
