import React from "react";
import Profile from "../img/dp.jpg";


const Aboutme = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={Profile} alt="profilepic" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Determined React Developer with hands on experience in identifying{" "}
            <br />
            web-based user interactions along with designing and implementing
            <br />
            highly responsive user interface components by deploying React
            Concepts. Proficent in translating designs & wireframes into
            high-quality code, and writing application interface code via
            Javascript and ReactJS workflows.Excellent focus,communication and
            ability to learn rapidly. <br />
            Good Team player with strong critical analysis and problem solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
