import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import logo from "assets/logo-nav.svg";
import "./TopBar.scss";
import UserWidgetComponent from "../UserWidget/UserWidgetComponent/UserWidget.jsx";

const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="top-bar__content">
        <NavLink to="/">
          <img
            className="top-bar__logo-section"
            src={logo}
            alt="Team Space Application"
          />
        </NavLink>
        <Navigation />

        <div className="top-bar__user-section"></div>
        <UserWidgetComponent />
      </div>
    </header>
  );
};

export default TopBar;
