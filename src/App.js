import React from "react";
import Home from "./components/Home";
import ShadeCalculator from "./components/ShadeCalculator";
import Header from "./components/Header";
import "./App.css";
import "./Scripts/slideAnimation";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shadecalculator" component={ShadeCalculator} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}
