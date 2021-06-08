import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Full Stack Developer</h1>
        <Typed
          className="typed-text"
          strings={[
            "User Interface Design",
            "Agile Developer",
            "Responsive UI",
            "Performance Optimization",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        ></Typed>
        <Link to="contact" href="#" className="btn-main-offer">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
