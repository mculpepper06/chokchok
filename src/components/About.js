import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about" className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <h2>About Company Page</h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <br />
              <button className="btn btn-outline-primary btn-lg">
                Get in Touch
              </button>
            </div>
            <div className="col-sm-4">
              <img
                src="https://assets.codepen.io/3218746/breadcrumb-trail-thumb.jpg"
                alt="img1"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
