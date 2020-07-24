import React from "react";

import Main from "./components/Main";
import ShadeFinder from "./components/ShadeFinder";
import Trending from "./components/Trending";
import Shop from "./components/Shop";
import About from "./components/About";


import "./App.css";
import "./Scripts/slideAnimation";


export default function App() {
  return (
    <React.Fragment>
      <ShadeFinder />
      <Trending />
      <Shop />
      <About />
      <Main />
    </React.Fragment>
  );
}
