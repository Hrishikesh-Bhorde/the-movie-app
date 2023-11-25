import { Outlet } from "react-router-dom";
import "./Layout.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
