// FullPage.js
import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="full-page">
      <div className="content">
        {/* Your page content goes here */}
        <h1>
          This app is made using ReactJS and The Movie Database (TMDB) API
        </h1>
        <button className="custom-button">Go to Search</button>
      </div>
    </div>
  );
};

export default Homepage;
