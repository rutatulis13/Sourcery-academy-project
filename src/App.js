import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "components/pages/Dashboard";
import Reservations from "components/pages/Reservations";
import Eat from "components/pages/Eat";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/Reservations">
              <Reservations />
            </Route>
            <Route path="/EatOut">
              <Eat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
