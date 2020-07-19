import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      <div
        id="services"
        className="container-fluid text-center"
        style={{ backgroundColor: "lightblue" }}
      >
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <br />
        <div className="row slideanim">
          <div className="col-sm-4">
            <img
              src="https://assets.codepen.io/3218746/orangepumpkin.jpg"
              alt="img1"
            />
            <h4>POWER</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://assets.codepen.io/3218746/orangepumpkin.jpg"
              alt="img1"
            />
            <h4>LOVE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://assets.codepen.io/3218746/orangepumpkin.jpg"
              alt="img1"
            />
            <h4>JOB DONE</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>

        <div className="row slideanim">
          <div className="col-sm-4">
            <img
              src="https://assets.codepen.io/3218746/orangepumpkin.jpg"
              alt="img1"
            />
            <h4>GREEN</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://assets.codepen.io/3218746/orangepumpkin.jpg"
              alt="img1"
            />
            <h4>CERTIFIED</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
          <div className="col-sm-4">
            <img
              src="https://assets.codepen.io/3218746/orangepumpkin.jpg"
              alt="img1"
            />
            <h4 style={{ color: "#303030" }}>HARD WORK</h4>
            <p>Lorem ipsum dolor sit amet..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
