import React, { Component } from "react";

class NavMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="#myPage">
            Logo
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  PORTFOLIO
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="jumbotron text-center">
          <h1>Company</h1>
          <p>We specialize in blablabla</p>
        </div>
      </React.Fragment>
    );
  }
}

export default NavMenu;
