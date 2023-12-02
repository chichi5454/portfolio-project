/** @format */
import GitHubIcon from "@mui/icons-material/GitHub";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import JavascriptIcon from "@mui/icons-material/Javascript";
import React from "react";

import "./aboutskill.css";

const AboutSkill = () => {
  return (
    <div className="aboutSkill-page">
      <div className="aboutSkill-page-content-one">
        <h3>My Skills</h3>
        <div className="about-social-btn">
          <button>HTML</button>
          <button>CSS</button>
          <button>Javascript</button>
          <button>React JS</button>
          <button>Bootstrap</button>
          <button>GitHub</button>
        </div>
        <div className="aboutSkill-socials">
          <HtmlIcon /> <CssIcon /> <JavascriptIcon /> <GitHubIcon />
        </div>
      </div>
      <div className="aboutSkill-page-content-two">
        <h3>ABOUT ME</h3>
        <div>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Bootstrap, and GitHub tool.
            I excel in designing and maintaining responsive websites that offer
            a smooth user experience.
          </p>
          <p>
            My expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques.
          </p>
          <p>
            I am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications.
          </p>
          <p>
            I'm a lifelong learner and always looking for new ways to grow and
            improve my skills. I'm currently learning more or React js and
            excited for this tech journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSkill;
