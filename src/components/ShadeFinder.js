import React, { Component } from "react";
import { Link} from "react-router-dom";

class ShadeFinder extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div id="about" className="container-fluid" >
          <div className="row">
            <div className="col-sm-8">
              <h2>Shade Finder</h2>
              <h4>
                Skin Concerns, Finish, & Brands - We Take It All Into Account
              </h4>
              <p>
                Here at ChokChok we take every single detail into consideration to ensure you are getting the very best match
                for your skin. Whether you are seeking a natural finish or full coverage, our system will match you with the closest and
                most natural shade for your skin tone. What are you waiting for? Get matched today!
              </p>
              <br />

            </div>
            <div className="col-sm-4">
              <img
                src="https://images.unsplash.com/photo-1512495967160-4e815a64fba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                alt="jpg"
                width="200"
                height="300"
              />
            </div>
            <Link to='/shadecalculator'>
              <button className="btn btn-outline-dark btn-lg">
                FIND MY SHADE
              </button>
            </Link>

          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default ShadeFinder;
