/** @format */
import cef from "../../Assets/cef.png";
import video from "../../Assets/video.mp4";
import brm from "../../Assets/brm.mp4";
import dash from "../../Assets/dash.mp4";
// import { Player } from "video-react";
import React from "react";

import "./work.css";

const Work = () => {
  return (
    <div className="Work" id="project">
      <h2>My Projects</h2>
      <div className="work-page">
        <h4>Each project is a unique piece of development 🧩</h4>


<h3>ARXERN Fintech App</h3>
        <div className="work-page-project">
          <div className="work-page-vid">
          <iframe
              src={dash}
              title="company website"
              className="hero-video"></iframe>
          </div>

          <div className="work-page-content">
            <p>
            ARXERN is a fintech web application built with Next.js and Tailwind CSS. It features a secure authentication flow and an intuitive user dashboard for tracking and managing investments.
            </p>
            <div className="demo">
            <a
                href="https://red-cross-bomet-branch.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                <button>Live</button>
              </a>
              <button>Code</button>
            </div>
          </div>
        </div>

        <h3>Kenya RedCross Bomet Branch</h3>
        <div className="work-page-project">
          <div className="work-page-vid">
          <iframe
              src={brm}
              title="company website"
              className="hero-video"></iframe>
          </div>

          <div className="work-page-content">
            <p>
              KRCS Bomet Branch official website aims to make processes easier and smoother such as membership and volunteer registration processes. An official organization website that allows users to access company
              details and services for educational or business use.
            </p>
            <div className="demo">
            <a
                href="https://red-cross-bomet-branch.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                <button>Live</button>
              </a>
              <button>Code</button>
            </div>
          </div>
        </div>

        <h3>Caribbean Cargo Shipping Services</h3>
        <div className="work-page-project">
          <div className="work-page-vid">
            <iframe
              src={video}
              title="company website"
              className="hero-video"></iframe>
          </div>

          <div className="work-page-content">
            <p>
              A company official website that allows users to access company
              details and services for educational or business use.
            </p>
            <div className="demo">
              <a
                href="https://caribbeancargo.co.ke/"
                target="_blank"
                rel="noopener noreferrer">
                <button>Live</button>
              </a>

              <a
                href="https://github.com/chichi5454/ecommerce-co"
                target="_blank"
                rel="noopener noreferrer">
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
        <h3>CEF Website</h3>
        <div className="work-page-project">
          <div className="work-page-img">
            <img src={cef} alt="company website" />
          </div>

          <div className="work-page-content">
            <p>
              A company official website that allows users to access company
              details and services for educational or business use. The website
              provides an interface for information, membership options, and
              tools to help users achieve desired interests from the company.
            </p>
            <div className="demo">
              <button>Live</button>
              <button>Code</button>
            </div>
          </div>
        </div>
     {/* 
  <h3>Calculator App</h3>
  <div className="work-page-project">
    <div className="work-page-content">
      <p>A calculator app allows users to solve math problems swiftly.</p>

      <div className="demo">
        <a
          href="https://cerulean-hotteok-acfd32.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          <button>Live</button>
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
      <img src={calculator} alt="calculator by Lauryn" />
    </div>
  </div>
  <h3>Weather App</h3>
  <div className="work-page-project">
    <div className="work-page-img">
      <img src={weather} alt="weather app by Lauryn" />
    </div>
    <div className="work-page-content">
      <p>
        A weather app allows users to search for weather information about
        various locations in real-time and view forecast of next 5 days.
      </p>

      <div className="demo">
        <a
          href="https://guileless-mooncake-f3d130.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          <button>Live</button>
        </a>

        <a
          href="https://github.com/chichi5454/last-project-shecodes-react"
          target="_blank"
          rel="noopener noreferrer">
          <button>Code</button>
        </a>
      </div>
    </div>
  </div>
*/}

      </div>
    </div>
  );
};

export default Work;
