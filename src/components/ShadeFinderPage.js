import React, { Component } from 'react';
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component';

class ShadeCalculator extends Component {
    constructor(){
    super()
    this.state = {
      brand: [
        {
          id: 0,
          title: 'MAC',
          selected: false,
          key: 'brand'
        },
        {
          id: 1,
          title: 'Nars',
          selected: false,
          key: 'brand'
        },
        {
          id: 2,
          title: 'Too Faced',
          selected: false,
          key: 'brand'
        },
        {
          id: 3,
          title: 'Make Up Forever',
          selected: false,
          key: 'brand'
        },
        {
          id: 4,
          title: 'Huda Beauty',
          selected: false,
          key: 'brand'
        },
        {
          id: 5,
          title: 'It Cosmetics',
          selected: false,
          key: 'brand'
        },
        {
          id: 6,
          title: 'Fenty',
          selected: false,
          key: 'brand'
        },
        {
          id: 7,
          title: 'Hourglass',
          selected: false,
          key: 'brand'
        }
      ],
      product: [
        {
          id: 0,
          title: 'MAC Studio Fix Fluid',
          selected: false,
          key: 'product'
        },
        {
          id: 1,
          title: 'Natural Radiant Longerwear Foundation',
          selected: false,
          key: 'product'
        },
        {
          id: 2,
          title: 'Born This Way',
          selected: false,
          key: 'product'
        },
        {
          id: 3,
          title: 'Pomegranate',
          selected: false,
          key: 'product'
        },
        {
          id: 4,
          title: '#FauxFilter Full Coverage Matte Foundation',
          selected: false,
          key: 'product'
        },
        {
          id: 5,
          title: 'CC+ Cream Illumination with SPF 50+',
          selected: false,
          key: 'product'
        },
        {
          id: 6,
          title: "Pro Filt'r Hydrating Longwear",
          selected: false,
          key: 'product'
        },
        {
          id: 7,
          title: 'Vanish Seamless Finish Foundation Stick',
          selected: false,
          key: 'product'
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
      <div className="App">
        <p>Dropdown menu examples</p>

        <h3>Regular</h3>

        <div className="wrapper">
          <DropdownMultiple
            titleHelper="Location"
            title="Select location"
            list={this.state.location}
            toggleItem={this.toggleItem}
          />

          <Dropdown
            title="Select fruit"
            list={this.state.fruit}
            resetThenSet={this.resetThenSet}
          />
        </div>

        <h3>Searchable</h3>

        <div className="wrapper">
          <DropdownMultiple
            searchable={["Search for location", "No matching location"]}
            titleHelper="Location"
            title="Select location"
            list={this.state.location}
            toggleItem={this.toggleItem}
          />

          <Dropdown
            searchable={["Search for fruit", "No matching fruit"]}
            title="Select fruit"
            list={this.state.fruit}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}

export default ShadeCalculator;