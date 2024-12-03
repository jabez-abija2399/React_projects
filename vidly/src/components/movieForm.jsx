import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./comman/form"; // Ensure you're importing a functional component
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

const MoviesForm = () => {
  const [data, setData] = useState({
    title: "",
    genreId: "",
    numberInStock: "",
    dailyRentalRate: "",
  });
  const [genres, setGenres] = useState([]);
  const [errors, setErrors] = useState({});

  const { id } = useParams(); // This will be undefined for /new/movie
  const navigate = useNavigate();

  const schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  useEffect(() => {
    console.log("Movie ID:", id); // Debug
    const genres = getGenres();
    setGenres(genres);

    if (!id || id === "new") {
      setData({
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: "",
      });
      console.log("New Movie Detected."); // Debug
      return;
    }

    const movie = getMovie(id);
    if (!movie) {
      console.log("Movie Not Found, Redirecting."); // Debug
      return navigate("/not-found");
    }

    setData(mapToViewModel(movie));
  }, [id, navigate]);

  const mapToViewModel = (movie) => ({
    _id: movie._id,
    title: movie.title,
    genreId: movie.genre._id,
    numberInStock: movie.numberInStock,
    dailyRentalRate: movie.dailyRentalRate,
  });

  const doSubmit = async () => {
    console.log("Submitting form...");
    console.log("Data:", data); // Ensure correct data is being passed
    try {
      await saveMovie(data);
      console.log("Movie saved successfully!");
    } catch (error) {
      console.error("Error saving movie:", error);
    }
  };

  return (
    <Form
      schema={schema}
      doSubmit={doSubmit}
      initialData={{
        title: "",
        genreId: "",
        numberInStock: "",
        dailyRentalRate: "",
      }}
    >
      {({ renderInput, renderSelect, renderButton }) => (
        <div>
          <h1>Movie Form</h1>
          <form onSubmit={doSubmit}>
            {renderInput("title", "Title")}
            {renderSelect("genreId", "Genre", genres)}
            {renderInput("numberInStock", "Number In Stock", "number")}
            {renderInput("dailyRentalRate", "Daily Rental Rate")}
            {renderButton("Save")}
          </form>
        </div>
      )}
    </Form>
  );
};

export default MoviesForm;
