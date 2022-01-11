import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import UserWidget from "../UserWidget/UserWidget.jsx";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation.jsx";
import logo from "assets/logo-nav.svg";
import "./TopBar.scss";

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
        <div className="top-bar__navigation-section">
          <Navigation />
        </div>
        <div className="top-bar__user-mobile-nav-section">
          <div className="top-bar__user-section">
            <UserWidget />
          </div>
          <div className="top-bar__mobile-nav-section">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
