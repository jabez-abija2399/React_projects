import React from "react";
import { useParams } from "react-router-dom"; // Import useParams

const MovieForm = () => {
  const { id } = useParams(); // Get the dynamic :id parameter from the URL

  return (
    <div>
      <h1>Movie Form {id}</h1>
      <button className="btn btn-primary" >Save</button>
    </div>
  );
};

export default MovieForm;