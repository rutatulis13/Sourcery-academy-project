import React, { Component } from "react";
import home from "./img/home.png";
import Vector from "./img/Vector.png";
import compass from "./img/compass.png";
import logo from "./img/Logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Reservations from "./Reservations.js";
import Eat from "./Eat.js";

class List extends Component {
  render() {
    return (
      <Router>
        <div className="navbar">
          <div>
            <NavLink to={"/"}>
              <img className="logo" src={logo} alt="" />
            </NavLink>
          </div>
          <nav>
            <ul className="navbar-list">
              <li>
                <NavLink
                  exact
                  to={"/"}
                  className="nav-list-item"
                  activeClassName="navbar-list--active"
                >
                  <img className="navbar-img" src={home} alt="" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={"/Reservations"}
                  className="nav-list-item"
                  activeClassName="navbar-list--active"
                >
                  <img className="navbar-img" src={Vector} alt="" />
                  <p>Reservations</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to={"/Eat"}
                  className="nav-list-item"
                  activeClassName="navbar-list--active"
                >
                  <img className="navbar-img" src={compass} alt="" />
                  <p>Eat-Out</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* kol kas nera */}
          <div className="signIn"></div>
        </div>
        <hr />
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
      </Router>
    );
  }
}

export default List;
