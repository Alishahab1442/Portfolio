import React from "react";
import "./Contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import microsoft from "../../assets/microsoft.png";
import facebookicon from "../../assets/facebook-icon.png";
import twittericon from "../../assets/twitter.png";
import youtubeicon from "../../assets/youtube.png";
import instagramicon from "../../assets/instagram.png";

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
            <img src={facebookicon} alt="Facebook" className="link" />
            <img src={twittericon} alt="Twitter" className="link" />
            <img src={youtubeicon} alt="Youtube" className="link" />
            <img src={instagramicon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
