/** @format */
import weather from "../../Assets/weather.png";
import cef from "../../Assets/cef.png";
import calculator from "../../Assets/calculator.png";
import React from "react";

import "./work.css";

const Work = () => {
  return (
    <div className="Work" id="project">
      <h2>My Projects</h2>
      <div className="work-page">
        <h4>Each project is a unique piece of development 🧩</h4>
        <div className="work-page-project">
          <div className="work-page-content">
            <h3>Company Website</h3>
            <p>
              A company official website that allows users to access company
              details and services for educational or business use. The website
              provides an interface for information, membership options, and
              tools to help users achieve desired interests from the company.
            </p>
            {/* <div className="work-bottom">
              <button>React JS</button>
              <button>CSS</button>
              <button> Flexbox</button>
              <button>GitHub</button>
            </div> */}
            <div className="demo">
              <button>Live Demo</button>
              <button>Code</button>
            </div>
          </div>
          <div className="work-page-img">
            <img src={cef} alt="company website" />
          </div>
        </div>
        <div className="work-page-project">
          <div className="work-page-content">
            <h3>Calculator App</h3>
            <p>A calculator app allows users to solve math problems swiftly.</p>
            {/* <div className="work-bottom">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>GitHub</button>
            </div> */}
            <div className="demo">
              <a
                href="https://cerulean-hotteok-acfd32.netlify.app/"
                target="_blank"
                rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>

              <a
                href="https://github.com/chichi5454/project-calculator-app"
                target="_blank"
                rel="noopener noreferrer">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-page-img">
            <img src={calculator} alt="alculator by Lauryn" />
          </div>
        </div>
        <div className="work-page-project">
          <div className="work-page-content">
            <h3>Weather App</h3>
            <p>
              A weather app allows users to search for weather information about
              various locations in real-time and view forecast of next 5 days.
            </p>
            {/* <div className="work-bottom">
              <button>React JS</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>API Integration</button>
              <button>GitHub</button>
            </div> */}
            <div className="demo">
              <a
                href="https://guileless-mooncake-f3d130.netlify.app/"
                target="_blank"
                rel="noopener noreferrer">
                <button>Live Demo</button>
              </a>

              <a
                href="https://github.com/chichi5454/last-project-shecodes-react"
                target="_blank"
                rel="noopener noreferrer">
                <button>Code</button>
              </a>
            </div>
          </div>
          <div className="work-page-img">
            <img src={weather} alt="weather app by Lauryn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
