import React from "react";

import Header from "./Header";
import ShadeFinder from "./ShadeFinder";
import Trending from "./Trending";
import Shop from "./Shop";
import About from "./About";

export default function Home() {
  return (
    <React.Fragment>      
      <ShadeFinder />
      <Trending />
      <Shop />
      <About />
    </React.Fragment>
  );
}
