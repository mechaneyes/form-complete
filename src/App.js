import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Reverie from "./pages/Reverie/Reverie";
import Orbit from "./pages/Orbit/Orbit";

import './App.scss';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Reverie} />
            <Route path="/reverie" component={Reverie} />
            <Route path="/orbit" component={Orbit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
