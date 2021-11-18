import React from "react";
import "./Dropdown.scss";
import PropTypes from "prop-types";

const DropdownComponent = (props) => {
  const dropdownClassNames = props.dropdownClassName;
  const dropdownTexts = props.dropdownText;
  return (
    <div className="dropdown">
      <ul className="dropdown__content">
        {dropdownClassNames.map((dropdownClassName, index) => {
          return (
            <li
              key={index}
              className={`dropdown__content__${dropdownClassName}`}
            >
              <a href="/#">{dropdownTexts[index]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

DropdownComponent.propTypes = {
  dropdownClassName: PropTypes.string,
  dropdownText: PropTypes.string,
};

export default DropdownComponent;
