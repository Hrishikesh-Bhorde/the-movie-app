// Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav>
      <b>Movie Search App</b>
    </nav>
  );
};

export default Navbar;
