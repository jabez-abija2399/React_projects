import React from 'react'

const MoviesTable = (props) => {
    const { movies } = props;  // object destructuring to extract the movies property from props

    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td>
                            <button onClick={() => props.onDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                        <td>
                            <button onClick={() => props.onLike(movie)} className="btn btn-primary btn-sm">Like</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default MoviesTable;