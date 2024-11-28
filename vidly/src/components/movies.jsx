import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./comman/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./comman/listGroup";

class Movies extends Component {
  // class Movies extends Component
  state = {
    // state object with a single property called movies
    movies: [], // movies property is initialized with an empty array
    genres: [], // genres property is initialized with an empty array
    currentPage: 1, // currentPage property is initialized with the value 1
    pagesize: 4, // pagesize property is initialized with the value 4
  }; // state object

  componentDidMount() {
    // componentDidMount lifecycle hook
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()]; // create a new array of genres with an additional object at the beginning
    this.setState({ movies: getMovies(), genres }); // update the state object with the movies and genres arrays
  }

  handleDelete = (movie) => {
    // handleDelete method
    const movies = this.state.movies.filter((m) => m._id !== movie._id); // filter method to exclude the movie object that was passed as an argument
    this.setState({ movies }); // update the state object
  };

  handleLike = (movie) => {
    // handleLike method
    const movies = [...this.state.movies]; // clone the movies array
    const index = movies.indexOf(movie); // find the index of the movie object that was passed as an argument
    movies[index] = { ...movies[index] }; // clone the movie object at the specified index
    movies[index].liked = !movies[index].liked; // toggle the liked property of the cloned movie object
    this.setState({ movies }); // update the state object
  };

  handlePageChange = (page) => {
    // handlePageChange method
    this.setState({ currentPage: page }); // update the currentPage property of the state object
  };

  handleGenresSelect = (genre) => {
    // handleGenresSelect method
    this.setState({ selectedGenre: genre, currentPage: 1 }); // update the selectedGenre and currentPage properties of the state object
  };

  render() {
    // render method
    const { length: count } = this.state.movies; // object destructuring to extract the length property of the movies array and store it in a variable called count
    if (count === 0) return <p>There are no movies in the database.</p>; // if the count property is 0, return a paragraph element with a message

    const { movies } = this.state; // extract movies from state
    const { currentPage, pagesize, selectedGenre } = this.state; // extract currentPage and pagesize from state
    const filtered =
      selectedGenre && selectedGenre._id // filter the movies array based on the selected genre
        ? movies.filter((m) => m.genre._id === selectedGenre._id) // if a genre is selected, filter the movies array
        : movies; // if no genre is selected, return the original movies array
    const paginatedMovies = paginate(filtered, currentPage, pagesize); // paginate the movies array
    return (
      // return statement
      <div className="row">
        <div className="col-3">
          <ListGroup // ListGroup component with items, textProperty, valueProperty, onItemSelect, and selectedItem props
            items={this.state.genres}
            onItemSelect={this.handleGenresSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable // MoviesTable component with movies, onDelete, and onLike props 
            movies={paginatedMovies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pagesize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies; // export the Movies component
