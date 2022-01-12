import React, { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation";
import "./MobileNavigation.scss";
import menu from "assets/menu.svg";
import close from "assets/close.svg";

const MobileNavigation = () => {
  const node = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMobileMenu = () => setNavbarOpen(false);

  useEffect(() => {
    let handleOutsideClick = (e) => {
      if (!node.current.contains(e.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    let handleKeyboardClick = (e) => {
      if (e.keyCode === 27) {
        setNavbarOpen(false);
      }
      if (e.keyCode === 13) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyboardClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleKeyboardClick);
    };
  });

  return (
    <div className="mobile-navigation" ref={node}>
      <button
        type="button"
        tabIndex="0"
        className="mobile-navigation__button"
        onClick={(e) => setNavbarOpen(!navbarOpen)}
      >
        <img
          className="mobile-navigation__button--icon"
          src={navbarOpen ? close : menu}
          alt=""
        />
      </button>
      <div className="mobile-navigation__menu">
        {navbarOpen && (
          <Navigation isMobile={true} closeMobileMenu={closeMobileMenu} />
        )}
      </div>
    </div>
  );
};

export default MobileNavigation;
