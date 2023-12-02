/** @format */
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import profile from "../../Assets/profile.jpg";
import resume from "../../Assets/resume.jpg";
import React from "react";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <div className="Aboutme">
      <div className="about-me-content">
        <p>Hi, I'm Lauryn. </p>
        <h3>Front-End React Developer</h3>
        <p>
          A passionate Front-end React Developer based in Nairobi, Kenya. 📍
        </p>
        <div className="about-me-socials">
          LinkedIn:
          <a href="http://www.linkedin.com/in/lauryn-m-abb6b6187">
            <LinkedInIcon className="social-icons" />
          </a>
          GitHub:
          <a href="https://github.com/chichi5454">
            <GitHubIcon className="social-icons" />
          </a>
          Resume:
          <a href={resume}>
            <PictureAsPdfIcon className="social-icons" />
          </a>
        </div>
      </div>
      <div className="about-me-pic">
        <img src={profile} alt="lauryn profile" />
      </div>
    </div>
  );
};

export default AboutMe;
