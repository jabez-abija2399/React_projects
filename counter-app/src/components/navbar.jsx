import React, { Component } from "react"; // Import React and Component from react library

const Navbar = ({ totalCounters }) => {
  // Navbar functional component with totalCounters prop
  return (
    // Return JSX for Navbar component
    <nav className="navbar navbar-light bg-light">
      {" "}
      {/* Bootstrap navbar with light background */}
      <div className="container-fluid">
        {" "}
        {/* Container fluid for navbar content */}
        <a className="navbar-brand" href="#">
          {" "}
          {/* Navbar brand with link */}
          Navbar {/* Text for Navbar */}
          <span className="badge bg-pill bg-secondary">
            {" "}
            {totalCounters}
          </span>{" "}
          {/* Badge with total counters value */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
