import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/SearchPage/Search";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />

        <Route path="search" element={<Search />}></Route>
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
