import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
// Import Bootstrap CSS

class Movies extends Component {
  // class Movies extends Component
  state = {
    // state object with a single property called movies
    movies: getMovies(), // movies property is initialized with the result of getMovies()
  }; // state object
  render() {
    // render method
    const { movies } = this.state;
    if (movies.length === 0) return <p>There are no movies in the database.</p>;
    return (
      // return statement
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th></th>   
          </tr>
        </thead>
        <tbody>
          {movies.map(
            (
              movie // map method to iterate over the movies array and return a table row element for each movie object in the array
            ) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>     
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}

export default Movies; // export the Movies component
