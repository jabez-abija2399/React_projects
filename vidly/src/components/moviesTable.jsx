import React, {Component} from "react";
import TableHeader from "./comman/tableHeader";
import Like from "./comman/like";

class MoviesTable extends Component {
    columns = [ 
        {path: "title", label: "Title"},
        {path: "genre.name", label: "Genre"},
        {path: "numberInStock", label: "Stock"},
        {path: "dailyRentalRate", label: "Rate"},
        {key: "like"},
        {key: "delete"}
    ];
    render() { 
        const { movies, onDelete, onLike,onSort, sortColumn } = this.props; // object destructuring to extract the movies, onDelete, and onLike properties from props
  return (
    <table className="table">
        <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={onSort}  
        />
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            
            <td>
                <Like
                    liked={movie.liked}
                    onClick={() => onLike(movie)}
                />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
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
