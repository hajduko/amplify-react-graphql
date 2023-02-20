import React, { Component } from "react";
import logo from "../img/logo.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              >
                <img
                  className="bi"
                  width="30"
                  height="30"
                  src={logo}
                  alt="EZ Solutions kft. logo"
                />
              </a>
              <span className="mb-3 mb-md-0 text-muted">
                Copyright &copy; EZ Innovations s.r.o.
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
