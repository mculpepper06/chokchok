import React, { Component } from "react";

class Results extends Component {
  render() {
    return (
        <React.Fragment>
        <div id="results" className="container-fluid text-center">
          <h2>Your Results</h2>
         
          <div className="row text-center slideanim">
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="Paris"
                  width="400"
                  height="300"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.pexels.com/photos/3751769/pexels-photo-3751769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="New York"
                  width="400"
                  height="300"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1595120028053-1fe6d710ed35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
                  alt="San Francisco"
                  width="400"
                  height="300"
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="thumbnail">
                <img
                  src="https://images.unsplash.com/photo-1530063139375-c15a976b3a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                  alt="San Francisco"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
          </div>
</React.Fragment>
    
    );
  }
}

export default Results;
