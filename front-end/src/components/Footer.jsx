import React from "react";
import { Link } from "react-router-dom";

// Social Icons
import FacebookYellow from "../images/facebook_yellow.svg";
import InstagramYellow from "../images/instagram_yellow.svg";
import LinkedinYellow from "../images/linkedin_yellow.svg";

export default function Footer(props) {

  return (
    <footer>
      <div className="footer-inner-wrapper">
      <div className="quick-links bold">
        <p className="quick-link">Quick Links</p>
        <Link className="link-reset yellow" to="/about">
          <p>About Me</p>
        </Link>
        <Link className="link-reset yellow" to="/mos">
          <p>Top 10 M.O.S</p>
        </Link>
        <Link className="link-reset yellow" to="/form">
          <p>Request Info</p>
        </Link>
      </div>
      <div className="social-media bold social-mobile">
        <p>CONNECT WITH ME</p>
        <div>
        <a href="https://www.facebook.com/">
              <img src={FacebookYellow} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={InstagramYellow} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={LinkedinYellow} alt="" />
            </a>
        </div>
      </div>
      <div className="national-gaurd-contact-info bold">
        <p>New York Army National Guard Recruiting & Retention</p>
        <p>955 Washington Ave, Peekskill, NY 10566</p>
        <p>montalvo.l.pagan.mil@mail.mil</p>
        <p>(347) 865-8226</p>
      </div>
      <div className="social-media bold social-tablet">
        <p>CONNECT WITH ME</p>
        <div>
        <a href="https://www.facebook.com/">
              <img src={FacebookYellow} alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={InstagramYellow} alt="" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={LinkedinYellow} alt="" />
            </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
