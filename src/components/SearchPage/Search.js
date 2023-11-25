import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Make sure to install the 'react-icons' library
import "./Search.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here, e.g., fetch data based on the searchTerm
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="content-search">
      <form onSubmit={handleSearchSubmit} className="search-bar">
        <input
          type="text"
          className="searchbar"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-btn">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
