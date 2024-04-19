import React from "react";
import "./Contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import microsoft from "../../assets/microsoft.png";
import facebookicon from "../../assets/facebook-icon.png";
import githubicon from "../../assets/icons8-github-130.png";
import instagramicon from "../../assets/instagram.png";
import linkedin from "../../assets/icons8-linkedin-130.png";

const Contact = () => {
  return (
    <section id="contactpage">
      <div id="clients">
        <h1 className="title">My Clients</h1>
        <p className="clientdesc">
          I have had the opportunity to work with a diverse group of companies.
        </p>
        <div className="clientImgs">
          <img src={walmart} alt="Client" className="clientimg" />
          <img src={adobe} alt="Client" className="clientimg" />
          <img src={microsoft} alt="Client" className="clientimg" />
          <img src={facebook} alt="Client" className="clientimg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactpgtitle">Contact Me </h1>
        <span className="contactdesc">
          {" "}
          Please fill out the from below to discuss any work and opportunities.{" "}
        </span>
        <form className="contactform">
          <input type="text" className="name" placeholder="Your Name" />
          <input type=" email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitbtn">
            Submit
          </button>
          <div className="links">
            <a
              class="facebook"
              href="https://www.facebook.com/profile.php?id=100009398955476"
              target={facebookicon}
              title="GFG_facebook"
            >
              <img src={facebookicon} alt="Facebook" className="link" />
            </a>
            <a
              class="git"
              href="https://github.com/Alishahab1442"
              title="Github"
              target={githubicon}
            >
              <img src={githubicon} alt="Github" className="link" />
            </a>
            <a
              class="git"
              href="https://www.linkedin.com/in/ali-shahab-b1b622276/"
              title="linkedin"
              target={linkedin}
            >
              <img src={linkedin} alt="linkedin" className="link" />
            </a>
            <a
              class="git"
              href="https://www.instagram.com/alishahab1442/"
              title="instagram"
              target={instagramicon}
            >
              <img src={instagramicon} alt="instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
