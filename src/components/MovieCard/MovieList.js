// MovieList.js
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2Y5MjA3NmYwNjIzOTI5NDAzYTgyNjliNmVmMjNmZCIsInN1YiI6IjY1MmNlNDgxMDI0ZWM4MDBjNzc1MDdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDL_-1EZb8AuQuq97rGh14lcQkcIy3P5y0--mLKss24",
      };

      let response = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=Game&include_adult=false&language=en-US&page=1",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      console.clear();
      console.log(data);

      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="album py-5  bg-body-dark">
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              votes={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
