import React from "react";
import "./Skill.css";
import UIDesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skilltitle">What I do</span>
      <span className="skilldescription">
        I am a skilled and passionate web designer with experience in HTML, CSS
        and JavaScript
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={UIDesign} alt="" />
          <div className="skillbartext">
            <h2>UI/UX Design</h2>
            <p>
              I am a UI/UX designer creating intuitive and visually appealing
              digital experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="skillbars">
        <div className="skillbar">
          <img src={webdesign} alt="" />
          <div className="skillbartext">
            <h2>Website Design</h2>
            <p>
              I am a web designer with creating visually appealing and
              user-friendly websites.
            </p>
          </div>
        </div>
      </div>
      <div className="skillbars">
        <div className="skillbar">
          <img src={appdesign} alt="" />
          <div className="skillbartext">
            <h2>Web App Design</h2>
            <p>
              I am a Web App Designer designing and implementing user-friendly
              web applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
