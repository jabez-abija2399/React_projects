import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
// Import Bootstrap CSS

class Movies extends Component {
  // class Movies extends Component
  state = {
    // state object with a single property called movies
    movies: getMovies(), // movies property is initialized with the result of getMovies()
  }; // state object

  handleDelete = (movie) => {
    // handleDelete method
    const movies = this.state.movies.filter((m) => m._id !== movie._id); // filter method to exclude the movie object that was passed as an argument
    this.setState({ movies }); // update the state object
  };

  render() {
    // render method
    const { length: count } = this.state.movies; // object destructuring to extract the length property of the movies array and store it in a variable called count
    if (count === 0) return <p>There are no movies in the database.</p>; // if the count property is 0, return a paragraph element with a message

    const { movies } = this.state; // extract movies from state

    return (
      // return statement
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>

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
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies; // export the Movies component
