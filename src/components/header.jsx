import React, { Component } from "react";
import logo from "../img/logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <img
                className="bi me-2"
                width="40"
                height="40"
                src={logo}
                alt="EZ Solutions kft. logo"
              />
              <span className="fs-4">EZ Solutions Dokumentum Generátor</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
            </ul>
          </header>
        </div>
      </>
    );
  }
}

export default Header;
