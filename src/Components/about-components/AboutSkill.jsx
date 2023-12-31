/** @format */

import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import React, { useState } from "react";
import "./aboutskill.css";

const AboutSkill = () => {
  const [showMore, setShowMore] = useState(false);

  const handleMore = () => {
    setShowMore(!showMore);
  };

  const datas = [
    {
      id: 1,
      icons: <CssIcon />,
      text: "React",
    },
    {
      id: 2,
      icons: <CssIcon />,
      text: "Git",
    },
    {
      id: 3,
      icons: <JavascriptIcon />,
      text: "JavaScript",
    },
    {
      id: 4,
      icons: <CssIcon />,
      text: "CSS",
    },
    {
      id: 5,
      icons: <CssIcon />,
      text: "HTML5",
    },
    {
      id: 6,
      icons: <CssIcon />,
      text: "BootStrap",
    },
  ];

  return (
    <div className="aboutSkill-page">
      <div className="aboutSkill-page-content-one">
        <h3>My Skills</h3>
        <div className="icons">
          {datas.map((data) => (
            <div className="icon-text" key={data.id}>
              {/* <button>{data.icons}</button> */}
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="aboutSkill-page-content-two">
        <h3>ABOUT ME</h3>
        <div>
          <p>
            As a passionate Front-End Developer, I possess an impressive arsenal
            of skills in HTML, CSS, JavaScript, React, Bootstrap, and the GitHub
            tool. I excel in designing and maintaining responsive websites that
            offer a smooth user experience.
          </p>

          {showMore && (
            <p>
              My expertise lies in crafting dynamic, engaging interfaces through
              writing clean and optimized code and utilizing cutting-edge
              development tools and techniques. I am also a team player who
              thrives in collaborating with cross-functional teams to produce
              outstanding web applications. I'm a lifelong learner and always
              looking for new ways to grow and improve my skills. I'm currently
              learning more on React js and excited for this tech journey.
            </p>
          )}
        </div>
        <button onClick={handleMore} className="button">
          <span>{showMore ? "Show Less" : "Show More"}</span>
        </button>
      </div>
    </div>
  );
};

export default AboutSkill;
