import React, { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegistrationFrom from "./components/registerForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/movie/:id" element={<MovieForm />} />
            <Route path="/new/movie" element={<MovieForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationFrom />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/movies" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
