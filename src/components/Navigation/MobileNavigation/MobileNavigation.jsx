import React, { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation";
import "./MobileNavigation.scss";
import menu from "assets/menu.svg";
import close from "assets/close.svg";

const MobileNavigation = () => {
  const node = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeMobileMenu = () => setNavbarOpen(false);
  const handleOutsideClick = (e) => {
    if (!node.current.contains(e.target)) {
      setNavbarOpen(false);
    }
  };
  const handleKeyboardClick = (e) => {
    if (e.keyCode === 27) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardClick);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyboardClick);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
