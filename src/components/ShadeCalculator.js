import React, { Component } from 'react'
import { Dropdown } from 'reactjs-dropdown-component';
import { Link } from "react-router-dom";

class ShadeCalculator extends Component {
  constructor() {
    super()
    this.state = {
      brand: [
        {
          id: 0,
          title: 'Too Faced',
          selected: false,
          key: 'brand'
        },
        {
          id: 1,
          title: 'Fenty',
          selected: false,
          key: 'brand'
        },
        {
          id: 2,
          title: 'MAC',
          selected: false,
          key: 'brand'
        },
        {
          id: 3,
          title: 'Nars',
          selected: false,
          key: 'brand'
        },
        {
          id: 4,
          title: 'Shiseido',
          selected: false,
          key: 'brand'
        },
        {
          id: 5,
          title: 'Estee Lauder',
          selected: false,
          key: 'brand'
        },
        {
          id: 6,
          title: 'Dior',
          selected: false,
          key: 'brand'
        },
        {
          id: 7,
          title: 'Charlotte Tilbury',
          selected: false,
          key: 'brand'
        }
      ],
      product: [
        {
          id: 0,
          title: 'Born This Way Foundation',
          selected: false,
          key: 'product'
        },
        {
          id: 1,
          title: "Pro Filt'r Hydrating Longwear Foundation",
          selected: false,
          key: 'product'
        },
        {
          id: 2,
          title: 'Studio Fix Fluid',
          selected: false,
          key: 'product'
        },
        {
          id: 3,
          title: 'Radiant Longwear Foundation',
          selected: false,
          key: 'product'
        },
        {
          id: 4,
          title: 'Synchro Skin Self-Refreshing Foundation SPF 30',
          selected: false,
          key: 'product'
        },
        {
          id: 5,
          title: 'Double Wear Stay-in-Place Foundation',
          selected: false,
          key: 'product'
        },
        {
          id: 6,
          title: 'Dior Forever Matte Foundation',
          selected: false,
          key: 'product'
        },
        {
          id: 7,
          title: 'Airbrush Flawless Longwear Foundation',
          selected: false,
          key: 'product'
        }
      ],
      shade: [
        {
          id: 0,
          title: 'Too Faced',
          selected: false,
          key: 'shade'
        },
        {
          id: 1,
          title: 'Fenty',
          selected: false,
          key: 'shade'
        },
        {
          id: 2,
          title: 'MAC',
          selected: false,
          key: 'shade'
        },
        {
          id: 3,
          title: 'Nars',
          selected: false,
          key: 'shade'
        },
        {
          id: 4,
          title: 'Shiseido',
          selected: false,
          key: 'shade'
        },
        {
          id: 5,
          title: 'Estee Lauder',
          selected: false,
          key: 'shade'
        },
        {
          id: 6,
          title: 'Dior',
          selected: false,
          key: 'shade'
        },
        {
          id: 7,
          title: 'Charlotte Tilbury',
          selected: false,
          key: 'shade'
        }
      ]
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.tabKeyPressed);
    window.addEventListener("mousedown", this.mouseClicked);
  }

  tabKeyPressed = (e) => {
    if (e.keyCode === 9) {
      document.querySelector('body').classList.remove("noFocus")
      window.removeEventListener('keydown', this.tabKeyPressed);
      window.addEventListener('mousedown', this.mouseClicked);
    }
  }

  mouseClicked = (e) => {
    document.querySelector('body').classList.add("noFocus")
    window.removeEventListener('mousedown', this.mouseClicked);
    window.addEventListener('keydown', this.tabKeyPressed);
  }

  toggleItem = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <React.Fragment>

        <div className="App">
          <h1 className="text-center">Shade Calculator</h1>

          <div className="row">
            <div className="col-sm-4">
              <p className="brand">Select the brand of foundation you currently wear.</p>
              <Dropdown
                searchable={["Search for a brand", "Brand does not exist"]}
                titleHelper="Location"
                title="Select a brand"
                list={this.state.brand}
                toggleItem={this.toggleItem}
              />

            </div>
            <div className="col-sm-4">
              <p>Select which product you use from this brand.</p>
              <Dropdown
                searchable={["Search for a product", "Product does not exist"]}
                title="Select a product"
                list={this.state.product}
                resetThenSet={this.resetThenSet}
              />
            </div>
            <div className="col-sm-4">
              <p>Select which shade you use in this product.</p>
              <Dropdown
                searchable={["Search product shades", "Shade does not exist"]}
                title="Select your shade"
                list={this.state.shade}
                resetThenSet={this.resetThenSet}
              />
            </div>
          </div>
        </div>



        <Link to='/results'>
          <div className="row ml-4">
          <button className="btn2 btn-primary btn-lg">
            Submit
              </button>
              </div>
        </Link>
      </React.Fragment >

    );
  }
}

export default ShadeCalculator;