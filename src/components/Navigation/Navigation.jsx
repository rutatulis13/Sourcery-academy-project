import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "./NavigationItem";
import "./Navigation.scss";
import logo from "assets/logo-nav.svg";
import home from "assets/home.svg";
import compass from "assets/compass.svg";
import bookmark from "assets/bookmark.svg";

const Navigation = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          className="navbar__logo-section"
          src={logo}
          alt="Team Space Application"
        />
      </NavLink>
      <nav>
        <ul className="navbar__link-section">
          <NavigationItem
            route="/"
            icon={home}
            iconAlt="home"
            pageName="Dashboard"
          />
          <NavigationItem
            route="/reservations"
            icon={bookmark}
            iconAlt="bookmark"
            pageName="Reservations"
          />
          <NavigationItem
            route="/eat-out"
            icon={compass}
            iconAlt="compass"
            pageName="Eat-Out"
          />
        </ul>
      </nav>
      <div className="navbar__user-section"></div>
    </div>
  );
};

export default Navigation;
