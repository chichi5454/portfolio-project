/** @format */
import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-layers">
        <div className="footer-layer-one">
          <div className="footer-layer-titles">
            <h5>Skills</h5>
          </div>
          <div className="footer-layer-one-details">
            <p>HTML5&CSS</p>
            <p>Boostrap</p>
            <p>Java Script</p>
            <p>React JS</p>
            <p>Github</p>
          </div>
        </div>
        <div className="footer-layer-two">
          <div className="footer-layer-titles">
            <h5>Services</h5>
          </div>
          <div className="footer-layer-two-details">
            <p>Front-End Development</p>
            <p>Web App Development</p>
            <p>Website Development</p>
            <p>Responsive Web Design</p>
          </div>
        </div>
        <div className="footer-layer-three">
          <div className="footer-layer-titles">
            <h5>Contact</h5>
          </div>
          <div className="footer-layer-three-details">
            <p>Twitter</p>
            <p>GitHub</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <p>Chichi M. © 2023. All rights are reserved</p>
      </div>
    </div>
  );
};

export default Footer;
