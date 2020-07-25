import React from "react";

import Header from "./components/Header";
import ShadeFinder from "./components/ShadeFinder";
import Trending from "./components/Trending";
import Shop from "./components/Shop";
import About from "./components/About";
import ShadeCalculator from "./components/ShadeCalculator";



import "./App.css";
import "./Scripts/slideAnimation";
import { BrowserRouter, Switch, Route } from "react-router-dom";




export default function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
      <Switch>
      <Route path='/shadecalculator' component={ShadeCalculator} />

      </Switch>
      </BrowserRouter>

      <Header />
      <ShadeFinder />
      <Trending />
      <Shop />
      <About />
     
    </React.Fragment>
  );
}
 