/** @format */

import React, { useState } from "react";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleMenu = () => {
    setToggleNav(!toggleNav);
  };

  const handleClicks = () => {
    setToggleNav(false);
  };

  return (
    <div className="Navbar">
      <div className="navbar-logo">
        <p>Chichi M.</p>
      </div>
      <div className={toggleNav ? "mobile-navbar-links" : "navbar-links"}>
        <ul>
          <li className="nav-link" onClick={handleClicks}>
            <a href="/">Home</a>
          </li>
          <li className="nav-link">
            {" "}
            <a href="/">About</a>
          </li>
          <li className="nav-link">
            {" "}
            <a href="/">Projects</a>
          </li>
          <li className="nav-link">
            {" "}
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <button onClick={handleToggleMenu}>{/* icons to close and bar */}</button>
    </div>
  );
};

export default Navbar;
