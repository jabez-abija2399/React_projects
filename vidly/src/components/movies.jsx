import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./comman/pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./comman/listGroup";
import _ from "lodash";

class Movies extends Component {
  // class Movies extends Component
  state = {
    // state object with a single property called movies
    movies: [], // movies property is initialized with an empty array
    genres: [], // genres property is initialized with an empty array
    currentPage: 1, // currentPage property is initialized with the value 1
    pagesize: 4, // pagesize property is initialized with the value 4
    sortColumn: { path: "title", order: "asc" }, // sortColumn property is initialized with an object containing the path and order properties
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

  handleSort = (sortColumn) => {
    // handleSort method

    this.setState({ sortColumn }); // update the sortColumn property of the state object
  };

  getPagedData = () => {
    // getPagedData method
    const {
      movies: allMovies,
      currentPage,
      pagesize,
      selectedGenre,
      sortColumn,
    } = this.state; // object destructuring to extract movies, currentPage, pagesize, selectedGenre, and sortColumn from the state object

    const filtered =
      selectedGenre && selectedGenre._id // if selectedGenre is truthy and selectedGenre._id is truthy
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id) // filter the movies array based on the selected genre
        : allMovies; // otherwise, return all movies

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]); // sort the filtered array based on the sortColumn.path and sortColumn.order properties

    const movies = paginate(sorted, currentPage, pagesize); // paginate the sorted array based on the currentPage and pagesize properties

    return { totalCount: filtered.length, data: movies }; // return an object with the totalCount and data properties
  };
  render() {
    // render method
    const { length: count } = this.state.movies; // object destructuring to extract the length property of the movies array and store it in a variable called count
    if (count === 0) return <p>There are no movies in the database.</p>; // if the count property is 0, return a paragraph element with a message

    const { currentPage, pagesize, sortColumn } = this.state; // extract currentPage and pagesize from state

    const { totalCount, data: paginatedMovies } = this.getPagedData(); // extract totalCount and data from getPagedData method

    return (
      // return statement
      <div className="row">
        <div className="col-3">
          <ListGroup // ListGroup component with items, textProperty, valueProperty, onItemSelect, and selectedItem props
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenresSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database.</p>
          <MoviesTable // MoviesTable component with movies, onDelete, and onLike props
            movies={paginatedMovies}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
