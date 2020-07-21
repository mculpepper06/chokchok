import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about" className="container-fluid" style={{ backgroundColor: "#BDEDFF" }}>
          <div className="row">
            <div className="col-sm-8">
              <h2>About</h2>
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
           
            </div>
            <div className="col-sm-4">
              <img
                src="https://images.pexels.com/photos/3912572/pexels-photo-3912572.jpeg"
                alt="jpg"
                width="200"
                height="200"
              />
            </div>
            <button className="btn btn-outline-dark btn-lg">
                FIND YOUR SHADE
              </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
