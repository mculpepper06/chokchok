import React, { Component } from "react";

class Trending extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="trending" className="container-fluid" style={{ backgroundColor: "#FFF8C6" }}>
          <div className="row">
            <div className="col-sm-8">
              <h2>Trending</h2>
              <h4>
                What's Hot Now
              </h4>
              <p>
                Sharing beauty and makeup favorites with you from all over Asia. Whether you are looking for new products to incorporate into your daily
                routine or you are interested in everyone is raving about. We bring you trends from countries like Korea and Japan.
              </p>
              <br />
           
            </div>
            <div className="col-sm-4">
              <img
                src="https://images.pexels.com/photos/3608367/pexels-photo-3608367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="jpg"
                width="200"
                height="300"
              />
            </div>
            <button className="btn btn-outline-dark btn-lg">
                TRENDING NOW
              </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Trending;
