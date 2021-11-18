import React, { useState } from "react";
import DropdownComponent from "../DropdownComponent/Dropdown.jsx";
import "./AvatarComponent.scss";
import avatarImage from "../../../assets/avatar.png";
import badgeImage from "../../../assets/heart.svg";

const AvatarComponent = () => {
  const [dropdownState, setDropdownState] = useState(false);

  // const dropdownListItems = [{ name: "Settings" }, { name: "Log-out" }];

  const changeDropdownState = () => {
    setDropdownState((dropdownState) => !dropdownState);
  };

  return (
    <div
      className="user-widget"
      role="button"
      tabIndex="0"
      onClick={() => {
        changeDropdownState();
      }}
      onKeyPress={() => {}}
    >
      <img src={avatarImage} alt="avatar" className="user-widget__avatar" />

      <div className="user-widget__badge">
        <img
          src={badgeImage}
          alt="heart"
          className="user-widget__badge-heart"
        />
      </div>
      {dropdownState && (
        <DropdownComponent
          dropdownClassName={["settings", "logout"]}
          dropdownText={["Settings", "Log-out"]}
        />
      )}
    </div>
  );
};
export default AvatarComponent;
