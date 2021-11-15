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
        <img className="logo" src={logo} alt="Team Space Application" />
      </NavLink>
      <nav>
        <ul className="navbar__list">
          <NavigationItem
            route="/"
            icon={home}
            iconAlt="home"
            pageName="Dashboard"
          />
          <NavigationItem
            route="/Reservations"
            icon={bookmark}
            iconAlt="bookmark"
            pageName="Reservations"
          />
          <NavigationItem
            route="/EatOut"
            icon={compass}
            iconAlt="compass"
            pageName="Eat-Out"
          />
        </ul>
      </nav>
      {/* kol kas nera */}
      <div className="sign-in"></div>
    </div>
  );
};

export default Navigation;
