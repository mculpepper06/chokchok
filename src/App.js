import React from "react";

import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Values from "./components/Values";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

import "./App.css";


export default function App() {
  return (
    <React.Fragment>
      <NavMenu />
      <About />
      <Values />
      <Services />
      <Portfolio />
    </React.Fragment>
  );
}
