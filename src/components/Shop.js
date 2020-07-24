import React, { Component } from "react";

class Shop extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="shop" className="container-fluid"  style={{ backgroundColor: "#FFCBA4" }}>
          <div className="row">
            <div className="col-sm-8">
              <h2>Shop</h2>
              <h4>
                Your One Stop Shop
              </h4>
              <p>
                Shopping for makeup online should not be difficult. We work hard to bring you the most trustworthy of links to ensure your makeup buying experience
                is easy and stress free. Our links connect you directly with each brand's site so you can shop easily while keeping your Shade Finder results handy.
              </p>
              <br />
           
            </div>
            <div className="col-sm-4">
              <img
                src="https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="jpg"
                width="200"
                height="300"
              />
            </div>
            <button className="btn btn-outline-dark btn-lg">
                SHOP NOW
              </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shop;
