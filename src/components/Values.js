import React, { Component } from "react";

class Values extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid" style={{ backgroundColor: "gray" }}>
          <div className="row">
            <div className="col-sm-4">
              <img
                src="https://assets.codepen.io/3218746/breadcrumb-trail-thumb.jpg"
                alt="img1"
                className="slideanim"
              />
            </div>
            <div className="col-sm-8">
              <h2>Our Values</h2>

              <h4>
                <strong>MISSION:</strong> Our mission lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </h4>

              <p>
                <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Values;
