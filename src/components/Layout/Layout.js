import { Outlet } from "react-router-dom";
import "./Layout.css";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
