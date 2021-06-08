import React from "react";
import { Link } from "react-scroll";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                className="nav-link"
                offset={-110}
                href="#"
              >
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="skills" className="nav-link" href="#">
                Technical Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="projects" className="nav-link" href="#">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
