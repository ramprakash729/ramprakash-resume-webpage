import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import {
  faPalette,
  faRocket,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="skills" className="services">
      <h1 className="py-5"> Technical Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faPalette}
                  size="2x"
                ></FontAwesomeIcon>
              </div>

              <h3>User Interface</h3>
              <p>
                Strong UI development skills with HTML/HTML5, CSS/CSS3, Sass,
                Bootstrap
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faRocket}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
              <h3>Optimized Performance</h3>
              <p>
                Optimization of Front End components for maximum performance .
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faUncharted}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
              <h3>Agile Developer</h3>
              <p>2.5+ years of experience in Agile Software Development</p>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faLayerGroup}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
              <h3>MERN Stack Developer</h3>
              <p>
                Extensive experience in development of web applications using
                MERN Stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
