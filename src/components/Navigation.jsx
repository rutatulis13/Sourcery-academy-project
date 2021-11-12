import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import logo from "assets/logo-nav.svg";
import home from "assets/home.svg";
import compass from "assets/compass.svg";
import bookmark from "assets/bookmark.svg";

const Navigation = () => {
  return (
    <div className="navbar">
      <div>
        <NavLink to={"/"}>
          <img className="logo" src={logo} alt="Team Space Application" />
        </NavLink>
      </div>
      <nav>
        <ul className="navbar__list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "navbar__list-item navbar__list-item--active "
                  : "navbar__list-item"
              }
            >
              <img className="navbar__img" src={home} alt="home" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Reservations"
              className={({ isActive }) =>
                isActive
                  ? "navbar__list-item navbar__list-item--active "
                  : "navbar__list-item"
              }
            >
              <img className="navbar__img" src={bookmark} alt="bookmark" />
              <span>Reservations</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/EatOut"
              className={({ isActive }) =>
                isActive
                  ? "navbar__list-item navbar__list-item--active "
                  : "navbar__list-item"
              }
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
