import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem/NavigationItem";
import ReservationsButton from "./NavigationItem/ReservationsButton";
import home from "assets/home.svg";
import compass from "assets/compass.svg";
import bookmark from "assets/bookmark.svg";
import "./Navigation.scss";

const Navigation = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar__link-section">
        <NavigationItem
          route="/"
          icon={home}
          iconAlt="home"
          pageName="Dashboard"
        />
        <ReservationsButton
          icon={bookmark}
          iconAlt="bookmark"
          pageName="Reservations"
          onClick={props.onClick}
          dropdownOpen={props.dropdownOpen}
        />
        <NavigationItem
          route="/eat-out"
          icon={compass}
          iconAlt="compass"
          pageName="Eat-Out"
        />
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  onClick: PropTypes.func,
  dropdownOpen: PropTypes.bool,
};

export default Navigation;
