import React from "react";
import "./Works.css";
import C1 from "../../assets/html png.png";
import C2 from "../../assets/css png.png";
import python from "../../assets/python png.png";
import python2 from "../../assets/python2 png.png";
import pf from "../../assets/pf png.png";
import GD from "../../assets/GD png.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my works is pixel perfect{" "}
      </span>
      <div className="worksImgs">
        <img src={GD} alt="" className="workImg" />
        <img src={C1} alt="" className="workImg" />
        <img src={pf} alt="" className="workImg" />
        <img src={python2} alt="" className="workImg" />
        <img src={python} alt="" className="workImg" />
        <img src={C2} alt="" className="workImg" />
      </div>
      <button className="workbtn">See More</button>
    </section>
  );
};

export default Works;
