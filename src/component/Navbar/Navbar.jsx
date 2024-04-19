import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo 2.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopmenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="desktopmenulistitem"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktopmenulistitem"
          >
            Client
          </Link>
        </div>
        <button
          className="desktopmenubtn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktopmenuimg" />
          Contact Me
        </button>

        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="navmenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="listitem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => setShowMenu(false)}
          >
            Client
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="listitem"
            onClick={() => setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
