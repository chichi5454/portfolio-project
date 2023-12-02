/** @format */
import AboutSkill from "../Components/about-components/AboutSkill";
import AboutMe from "../Components/about-components/AboutMe";
import React from "react";

import "./about.css";

const About = () => {
  return (
    <div className="About">
      <AboutMe />
      <AboutSkill />
    </div>
  );
};

export default About;
