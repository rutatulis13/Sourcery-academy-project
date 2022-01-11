import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import ReservationsButton from "./NavigationItem/ReservationsButton";
import home from "assets/home.svg";
import compass from "assets/compass.svg";
import bookmark from "assets/bookmark.svg";
import "./Navigation.scss";

const Navigation = () => {
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

export default Navigation;
