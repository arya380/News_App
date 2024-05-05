import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                <li className="nav-item ">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  About
                </a>
                <li
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  <a>Busines</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
