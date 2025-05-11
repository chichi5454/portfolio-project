/** @format */

import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import React from "react";
import "./aboutskill.css";

const AboutSkill = () => {
  const datas = [
    { id: 1, icons: <CssIcon />, text: "Next JS" },
    { id: 2, icons: <CssIcon />, text: "React JS" },
    { id: 3, icons: <JavascriptIcon />, text: "JavaScript" },
    { id: 4, icons: <CssIcon />, text: "Tailwind CSS" },
    { id: 5, icons: <CssIcon />, text: "HTML5" },
    { id: 6, icons: <CssIcon />, text: "BootStrap" },
  ];

  return (
    <div className="aboutSkill-page">
      <div className="aboutSkill-page-content-one">
        <h3>My Skills</h3>
        <div className="icons">
          {datas.map((data) => (
            <div className="icon-text" key={data.id}>
              <span className="skill-icon">{data.icons}</span>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="aboutSkill-page-content-two">
        <h3>ABOUT ME</h3>
        <p>
          Front-End Developer specializing in responsive, user-friendly web apps using Next.js, React, Tailwind CSS, and TypeScript. With experience in fintech and nonprofit projects, I write clean, scalable code and collaborate with teams to deliver impactful digital solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutSkill;
