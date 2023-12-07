import React, { useEffect, useState } from "react";

import "./Search.css";

import MovieList from "../MovieCard/MovieList";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearched, toggleSearched] = useState(false);

  // CallAPI();

  const handleSearch = (event) => {
    event.preventDefault();

    const searchTerm = event.target.value;
    setSearchTerm(searchTerm); // Log the searched string to the console
    toggleSearched(true); // this should be present in onSubmit
  };

  return (
    <div className="container-fluid p-3">
      <div className="input-group mt-3 mb-3 ">
        <input
          type="text"
          className="form-control bg-dark text-secondary"
          style={{ color: "white" }}
          placeholder="Movie name..."
          aria-label="Movie Name"
          aria-describedby="button-addon2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          {/* <FaSearch /> */}
        </button>
      </div>
      {isSearched ? (
        <h1 style={{ fontSize: "20px" }}>
          Results for : <span id="searched_name"></span>
        </h1>
      ) : (
        <h1 style={{ fontSize: "20px" }}>Popular</h1>
      )}

      {/* <MovieList /> */}
      <MovieList />
    </div>
  );
};

export default SearchBar;
