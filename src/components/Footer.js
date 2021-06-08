import React from "react";
import {
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Madurai,Tamilnadu,India.</p>
            </div>
            <div className="d-flex">
              <a href="tel:9080340201">+91-9080340201</a>
            </div>
            <div className="d-flex">
              <p>raam.prakash729@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href="">
                  Home
                </a>
                <br />
                <a className="footer-nav" href="">
                  About Me
                </a>
                <br />
                <a className="footer-nav" href="">
                  Technical Skills
                </a>
                <br />
              </div>
              <div className="col">
                <a className="footer-nav" href="">
                  Experience
                </a>
                <br />
                <a className="footer-nav" href="">
                  Projects
                </a>
                <br />
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <EmailShareButton
                url={"https://www.linkedin.com/in/ramprakash-b-b8a747116/"}
                quote={"Full stack Developer"}
              >
                <EmailIcon className="mx-3" size={36}></EmailIcon>
              </EmailShareButton>

              <LinkedinShareButton
                url={"https://www.linkedin.com/in/ramprakash-b-b8a747116/"}
                quote={"Full stack Developer"}
              >
                <LinkedinIcon className="mx-3" size={36}></LinkedinIcon>
              </LinkedinShareButton>

              <WhatsappShareButton
                url={"https://www.linkedin.com/in/ramprakash-b-b8a747116/"}
                quote={"Full stack Developer"}
              >
                <WhatsappIcon className="mx-3" size={36}></WhatsappIcon>
              </WhatsappShareButton>

              <FacebookShareButton
                url={"https://www.linkedin.com/in/ramprakash-b-b8a747116/"}
                quote={"Full stack Developer"}
              >
                <FacebookIcon className="mx-3" size={36}></FacebookIcon>
              </FacebookShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;{new Date().getFullYear()}&nbsp; Ramprakash|All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
