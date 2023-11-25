// FullPage.js
import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="content">
      {/* Your page content goes here */}
      <h1>
        This app is made using ReactJS <br /> The Movie Database (TMDB) API
      </h1>
      <Link to="/search" className="custom-button">
        Go to Search &gt;
      </Link>
    </div>
  );
};

export default Homepage;
