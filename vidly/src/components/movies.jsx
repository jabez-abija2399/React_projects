import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  // class Movies extends Component
  state = {
    // state object with a single property called movies
    movies: getMovies(), // movies property is initialized with the result of getMovies()
  }; // state object
  render() {
    // render method
    return (
      // return statement
      <table className="table">
        {" "}
        // table element with a class name of table
        <thead>
          {" "}
          // table head element
          <tr>
            <th>Title</th> // table row element with table header elements
            <th>Genre</th> // table row element with table header elements
            <th>Stock</th> // table row element with table header elements
            <th>Rate</th> // table row element with table header elements
          </tr>
        </thead>
        <tbody>
          {" "}
          // table body element
          {this.props.movies.map(
            (
              movie // map method to iterate over the movies array and return a table row element for each movie object in the array
            ) => (
              <tr key={movie._id}>
                {" "}
                // table row element with a key attribute set to the movie's _id
                property
                <td>{movie.title}</td> // table data element
                <td>{movie.genre.name}</td> // table data element
                <td>{movie.numberInStock}</td> // table data element
                <td>{movie.dailyRentalRate}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}

export default Movies; // export the Movies component
