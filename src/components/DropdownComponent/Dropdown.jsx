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
              className={`dropdown__content__${dropdownItem.iconName}`}
            >
              <img src={dropdownItem.iconName} alt="dropdownItem" />
              <a href="/#">{dropdownItem.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropdownComponent.propTypes = {
  dropdownItems: PropTypes.array,
};

export default DropdownComponent;
