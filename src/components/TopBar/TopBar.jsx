import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "components/Navigation/Navigation";
import UserWidget from "../UserWidget/UserWidget.jsx";
import MobileNavigation from "../Navigation/MobileNavigation/MobileNavigation.jsx";
import logo from "assets/logo-nav.svg";
import notification from "../../assets/notification.svg";
import "./TopBar.scss";

const TopBar = () => {
  const mobileNavigationRef = useRef();
  const navigationRef = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMobileMenu = () => setNavbarOpen(!navbarOpen);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !mobileNavigationRef.current.contains(e.target) &&
        !navigationRef.current.contains(e.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    const handleKeyboardClick = (e) => {
      if (e.keyCode === 27) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyboardClick);
    };
  }, []);
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
        <div className="top-bar__navigation-section" ref={navigationRef}>
          <Navigation onClick={closeMobileMenu} dropdownOpen={navbarOpen} />
        </div>
        <div className="top-bar__user-mobile-nav-section">
          <div className="top-bar__user-section">
            <img
              src={notification}
              alt="notification"
              className="top-bar__notification"
            />
            <UserWidget />
          </div>
          <div
            className="top-bar__mobile-nav-section"
            ref={mobileNavigationRef}
          >
            <MobileNavigation
              onClick={closeMobileMenu}
              dropdownOpen={navbarOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
