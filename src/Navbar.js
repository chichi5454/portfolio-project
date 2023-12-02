/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

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
          <li className="nav-link" onClick={handleClicks}>
            {" "}
            <a href="/">About</a>
          </li>
          <li className="nav-link" onClick={handleClicks}>
            {" "}
            <a href="https://www.shecodesfoundation.org/kenya" target="blank">
              Projects
            </a>
          </li>
          <li className="nav-link" onClick={handleClicks}>
            {" "}
            <a href="https://chichi54lora.substack.com/" target="blank">
              Blog
            </a>
          </li>
          <li className="nav-link" onClick={handleClicks}>
            {" "}
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <button onClick={handleToggleMenu} className="show-nav-btn">
        {toggleNav ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
