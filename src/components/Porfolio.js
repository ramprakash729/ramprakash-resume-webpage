import React from "react";
import api from "../img/api.jpg";
import rfire from "../img/reactfire.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
const Porfolio = () => {
  const openPopupboxApi = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={api} alt="api" />
        <p>Api Based Project</p>
        <b>Github Link</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/v-nakon/vk.com_parse_user_from_group/blob/master/USERS_DATA.txt"
            )
          }
        >
          https://github.com/v-nakon/vk.com_parse_user_from_group/blob/master/USERS_DATA.txt
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigApi = {
    titleBar: {
      enable: true,
      text: "API Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxRfire = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={rfire} alt="api" />
        <p>React Firebase Based Project</p>
        <b>Github Link</b>
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/v-nakon/vk.com_parse_user_from_group/blob/master/USERS_DATA.txt"
            )
          }
        >
          https://github.com/v-nakon/vk.com_parse_user_from_group/blob/master/USERS_DATA.txt
        </a>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigRfire = {
    titleBar: {
      enable: true,
      text: "React firebase Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div id="projects" className="container ">
        <h1 className="text-uppercase text-center py-5">Projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxApi}>
            <img className="portfolio-image" src={api} alt="api" />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          {/* two */}

          <div className="portfolio-image-box" onClick={openPopupboxRfire}>
            <img className="portfolio-image" src={rfire} alt="react" />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>

          {/* three */}
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={api} alt="api" />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="portfolio-icon"
              icon={faSearchPlus}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigApi}></PopupboxContainer>
      <PopupboxContainer {...popupboxConfigRfire}></PopupboxContainer>
    </div>
  );
};

export default Porfolio;
