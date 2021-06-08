import React from "react";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon"></span> */}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white" }}
          ></FontAwesomeIcon>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                About me
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Technical Skills
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Experience
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
