import React from "react";
import "./Skill.css";
import coursera from "../../assets/coursera.png";
import LGU from "../../assets/LGU.png";
import nexskill from "../../assets/nexskill.png";

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
          <img src={LGU} alt="" />
          <div className="skillbartext">
            <h2>Lahore Garrision University</h2>
            <p>
              I graduated from Lahore Garrison University in Computer Science.
            </p>
          </div>
        </div>
      </div>
      <div className="skillbars">
        <div className="skillbar">
          <img src={nexskill} alt="" />
          <div className="skillbartext">
            <h2>NexSkill</h2>
            <p>I got certificate from nexSkill in MERN stack development.</p>
          </div>
        </div>
      </div>
      <div className="skillbars">
        <div className="skillbar">
          <img src={coursera} alt="" />
          <div className="skillbartext">
            <h2>Coursera</h2>
            <p>
              I achieved online certificates from different universities of
              coursera.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
