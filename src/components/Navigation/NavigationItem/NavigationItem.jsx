import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import "./NavigationItem.scss";

const NavigationItem = ({
  route,
  icon,
  iconAlt,
  pageName,
  isMobile,
  closeMobileMenu,
}) => {
  return (
    <li>
      <NavLink
        onClick={(e) => closeMobileMenu(isMobile)}
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
  isMobile: PropTypes.bool,
  closeMobileMenu: PropTypes.func,
};

export default NavigationItem;
