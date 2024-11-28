import React, {Component} from "react";
// import Like from "./common/like"; // Removed unused import

class MoviesTable extends Component {
    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    };
    

    render() { 
        const { movies, onDelete, onLike } = this.props; // object destructuring to extract the movies, onDelete, and onLike properties from props
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => this.raiseSort("title")}>Title</th>
          <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
          <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
            <td>
              <button
                onClick={() => onLike(movie)}
                className="btn btn-primary btn-sm"
              >
                Like
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
}

export default MoviesTable; // export the MoviesTable component
