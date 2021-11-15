import React from "react";
import "./Dropdown.scss";
class DropdownComponent extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <ul className="dropdown__content">
          <li className="dropdown__content-settings">
            <span>Settings</span>
          </li>
          <li className="dropdown__content-logout">
            <span>Log-out</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default DropdownComponent;
