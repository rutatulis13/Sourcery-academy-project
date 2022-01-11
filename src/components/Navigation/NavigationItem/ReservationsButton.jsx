import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem";
import "./ReservationsButton.scss";

const ReservationsButton = ({ icon, iconAlt, pageName }) => {
  const node = useRef();
  const [navbarOpen, setNavbarOpen] = useState(false);

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
    <div className="reservations-dropdown">
      <button
        type="button"
        tabIndex="0"
        className="reservations-dropdown__button"
        onClick={(e) => setNavbarOpen(!navbarOpen)}
      >
        <img
          className="reservations-dropdown__button--icon"
          src={icon}
          alt={iconAlt}
        />
        <span>{pageName}</span>
      </button>
      {navbarOpen ? (
        <div className="reservations-dropdown__menu" ref={node}>
          <NavigationItem
            route="/reservations/books"
            pageName="Book Reservations"
          />
          <NavigationItem
            route="/reservations/devices"
            pageName="Device Reservations"
          />
        </div>
      ) : null}
    </div>
  );
};

ReservationsButton.propTypes = {
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  pageName: PropTypes.string,
};

export default ReservationsButton;
