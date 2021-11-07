import React from "react";
import linkedin from "../assets/logos/LinkedIn.svg";
import twitter from "../assets/logos/Twitter.svg";
import github from "../assets/logos/Github.svg";

function Footer() {
  return (
    <div className="bg-dark">
      <nav className="navbar navbar-dark navbar-expand">
        <div className="container">
          <span className="navbar-brand mb-0 h1 text-white float-start prata">
            Jonathan Specter
          </span>
          <div className="d-flex justify-content-end collapse navbar-collapse float-end inter">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <a href="https://twitter.com" className="nav-link">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li className="navbar-item">
                <a href="https://www.linkedin.com" className="nav-link">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li className="navbar-item">
                <a href="https://github.com/" className="nav-link">
                  <img src={github} alt="GitHub" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
