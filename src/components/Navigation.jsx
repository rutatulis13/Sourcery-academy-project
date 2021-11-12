import React from "react";
import home from "assets/home.svg";
import compass from "assets/compass.svg";
import bookmark from "assets/bookmark.svg";
import logo from "assets/logo-nav.svg";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navbar">
      <div>
        <NavLink to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="navbar__list">
          <li>
            <NavLink
              exact
              to={"/"}
              className="navbar__list-item"
              activeClassName="navbar__list-item--active"
            >
              <img className="navbar__img" src={home} alt="home" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={"/Reservations"}
              className="navbar__list-item"
              activeClassName="navbar__list-item--active"
            >
              <img className="navbar__img" src={bookmark} alt="bookmark" />
              <span>Reservations</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to={"/Eat"}
              className="navbar__list-item"
              activeClassName="navbar__list-item--active"
            >
              <img className="navbar__img" src={compass} alt="compass" />
              <span>Eat-Out</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* kol kas nera */}
      <div className="signIn"></div>
    </div>
  );
};

export default Navigation;
