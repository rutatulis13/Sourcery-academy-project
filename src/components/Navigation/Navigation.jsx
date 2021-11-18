import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./Navigation.scss";
import home from "assets/home.svg";
import compass from "assets/compass.svg";
import bookmark from "assets/bookmark.svg";

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
        <NavigationItem
          route="/reservations"
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
