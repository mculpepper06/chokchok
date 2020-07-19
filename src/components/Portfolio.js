import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="portfolio" className="container-fluid text-center bg-grey">
          <h2>Portfolio</h2>
          <h4>What we have created</h4>
          <div className="row text-center slideanim">
            <div className="col-sm-4">
              <div className="thumbnail">
                <img
                  src="https://assets.codepen.io/3218746/Tennis.bmp"
                  alt="Paris"
                  width="400"
                  height="300"
                />
                <p>
                  <strong>Paris</strong>
                </p>
                <p>Yes, we built Paris</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail">
                <img
                  src="https://assets.codepen.io/3218746/Baseball.bmp"
                  alt="New York"
                  width="400"
                  height="300"
                />
                <p>
                  <strong>New York</strong>
                </p>
                <p>We built New York</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="thumbnail">
                <img
                  src="https://assets.codepen.io/3218746/8ball.bmp"
                  alt="San Francisco"
                  width="400"
                  height="300"
                />
                <p>
                  <strong>San Francisco</strong>
                </p>
                <p>Yes, San Fran is ours</p>
              </div>
            </div>
          </div>

          <h2>What our customers say</h2>
          <div
            id="reactCarousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#reactCarousel"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#reactCarousel" data-slide-to="1" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://assets.codepen.io/3218746/lake.jpg"
                  alt="img1"
                  data-src="https://assets.codepen.io/3218746/slide-1.jpg"
                  data-holder-rendered="true"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3>First slide</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://assets.codepen.io/3218746/sunset.jpg"
                  alt="img2"
                  data-src="https://assets.codepen.io/3218746/slide-2.jpg"
                  data-holder-rendered="true"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Second slide</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#reactCarousel"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#reactCarousel"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
