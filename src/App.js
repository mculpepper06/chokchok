import React from "react";

import Main from "./components/Header";
import ShadeFinder from "./components/ShadeFinder";
import Trending from "./components/Trending";
import Shop from "./components/Shop";
import About from "./components/About";



import "./App.css";
import "./Scripts/slideAnimation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShadeCalculator from "./components/ShadeCalculator";



export default function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
      <Switch>
      <Route path='/shadecalculator' component={ShadeCalculator} />

      </Switch>
      </BrowserRouter>

      <Main />
      <ShadeFinder />
      <Trending />
      <Shop />
      <About />
     
    </React.Fragment>
  );
}
