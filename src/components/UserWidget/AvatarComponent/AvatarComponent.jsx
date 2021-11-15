import React from "react";
import DropdownComponent from "../DropdownComponent/Dropdown.jsx";
import "./AvatarComponent.scss";
class AvatarComponent extends React.Component {
  state = {
    displayAvatarDropdown: false,
  };
  dropdownState = () => {
    this.setState({
      displayAvatarDropdown: !this.state.displayAvatarDropdown,
    });
  };
  render() {
    return (
      <div
        className="user__widget"
        role="button"
        tabIndex="0"
        onClick={() => {
          this.dropdownState();
        }}
        onKeyPress={() => {}}
      >
        <img
          src={require("../../../resources/avatar.png")}
          alt="avatar"
          className="user__widget-avatar"
        />
        <img
          src={require("../../../resources/heart.svg")}
          alt="heart"
          className="user__widget-heart"
        />

        {this.state.displayAvatarDropdown && <DropdownComponent />}
      </div>
    );
  }
}
export default AvatarComponent;
