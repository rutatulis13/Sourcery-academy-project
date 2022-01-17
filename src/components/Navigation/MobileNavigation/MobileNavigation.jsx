import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Navigation from "../Navigation";
import menu from "assets/menu.svg";
import close from "assets/close.svg";
import "./MobileNavigation.scss";

const MobileNavigation = (props) => {
  const navigationRef = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMobileMenu = () => setNavbarOpen(!navbarOpen);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!navigationRef.current.contains(e.target)) {
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
    <div className="mobile-navigation" ref={navigationRef}>
      <button
        aria-expanded="false"
        type="button"
        tabIndex="0"
        className="mobile-navigation__button"
        onClick={closeMobileMenu}
      >
        <img
          className="mobile-navigation__button--icon"
          src={navbarOpen ? close : menu}
          alt=""
        />
      </button>
      <div className="mobile-navigation__dropdown">
        {navbarOpen ? (
          <Navigation
            isMobile={true}
            onClick={props.onClick}
            dropdownOpen={props.dropdownOpen}
          />
        ) : null}
      </div>
    </div>
  );
};

MobileNavigation.propTypes = {
  onClick: PropTypes.func,
  dropdownOpen: PropTypes.bool,
};

export default MobileNavigation;
