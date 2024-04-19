import React from "react";
import "./Intro.css";
import Image from "../../assets/Image.png";
import { Link } from "react-scroll";
import btnimg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introcontent">
          <span className="hello">Hello,</span>
          <span className="introtext">
            I'm <span className="introname">Ali Shahab</span> <br /> React
            Developer{" "}
          </span>
          <p className="intropara">
            {" "}
            I am React Developer with experience in creating <br /> user
            friendly and attractive websites
          </p>
          <Link>
            <button className="btn">
              <img src={btnimg} alt="Hire" className="btnImg" />
              Hire Me
            </button>
          </Link>
        </div>
        <img src={Image} alt="" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
