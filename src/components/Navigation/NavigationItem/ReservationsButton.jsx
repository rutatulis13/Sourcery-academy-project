import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem";
import "./ReservationsButton.scss";

const ReservationsButton = (props) => {
  const buttonClasses = classNames("reservations-dropdown__button", {
    "reservations-dropdown__button--active": window.location.pathname.includes(
      "reservations"
    ),
  });

  return (
    <div className="reservations-dropdown">
      <button
        aria-expanded="false"
        type="button"
        tabIndex="0"
        className={buttonClasses}
        onClick={props.onClick}
      >
        <img
          className="reservations-dropdown__button--icon"
          src={props.icon}
          alt={props.iconAlt}
        />
        <span>{props.pageName}</span>
      </button>
      {props.dropdownOpen ? (
        <div className="reservations-dropdown__menu">
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
  onClick: PropTypes.func,
  dropdownOpen: PropTypes.bool,
};

export default ReservationsButton;
