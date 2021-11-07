import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg pb-5">
      <div className="container">
        <span className="navbar-brand mb-0 h1 text-white float-start prata">
          Jonathan Specter
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse inter d-flex-inline justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="navbar-item">
              <a href="/" className="nav-link">
                Articles
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="nav-link">
                Chats
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="nav-link">
                Awards
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
            <li className="navbar-item d-lg-none d-xl-none">
              <a href="/" className="btn btn-lg btn-custom inter">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div className="inter d-none d-lg-block d-xl-block">
          <button className="btn btn-lg btn-custom">Get in touch</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
