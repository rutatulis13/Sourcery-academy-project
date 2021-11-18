import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import "./NavigationItem.scss";

const NavigationItem = ({ route, icon, iconAlt, pageName }) => {
  return (
    <li>
      <NavLink
        to={route}
        className={({ isActive }) =>
          classNames({
            "navbar__link-item": true,
            "navbar__link-item--active": isActive,
          })
        }
      >
        <img className="navbar__img" src={icon} alt={iconAlt} />
        <span>{pageName}</span>
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  route: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
  pageName: PropTypes.string,
};

export default NavigationItem;
