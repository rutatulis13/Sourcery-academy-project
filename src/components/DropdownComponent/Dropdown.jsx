import React from "react";
import "./Dropdown.scss";
import PropTypes from "prop-types";

const DropdownComponent = ({ dropdownItems }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown__content">
        {dropdownItems.map((dropdownItem, index) => {
          return (
            <li
              key={index}
              className={`dropdown__content__${dropdownItem.iconPath}`}
            >
              <img src={dropdownItem.iconPath} alt="dropdownItem" />
              <a href="/#" onClick={dropdownItem.func}>
                {dropdownItem.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropdownComponent.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DropdownComponent;
