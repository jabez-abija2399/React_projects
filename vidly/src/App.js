import React, { Component } from "react";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import { Route, Navigate, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

class App extends Component {
  render() {
    return (

      <React.Fragment>

        <NavBar />
        <main className="container">
          
          <Routes>
              <Route path="/movie/:id" element={<MovieForm />} />
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
