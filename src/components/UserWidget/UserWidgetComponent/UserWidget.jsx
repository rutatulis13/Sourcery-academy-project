import React, { useState, useEffect, useRef } from "react";
import DropdownComponent from "../DropdownComponent/Dropdown.jsx";
import "./UserWidget.scss";
import avatarImage from "../../../assets/avatar.png";
import badgeImage from "../../../assets/arrowDown.svg";
import settingsImage from "../../../assets/settings.svg";
import logoutImage from "../../../assets/logOut.svg";

const UserWidgetComponent = () => {
  const node = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = [
    { iconName: settingsImage, text: "Settings" },
    { iconName: logoutImage, text: "Log-out" },
  ];

  const handleDropdownClick = (e) => {
    if (node.current.contains(e.target)) return;
    setDropdownOpen(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleDropdownClick);
    return () => {
      document.removeEventListener("mousedown", handleDropdownClick);
    };
  }, []);

  return (
    <div
      ref={node}
      className="user-widget"
      role="button"
      tabIndex="0"
      onClick={(e) => setDropdownOpen(!dropdownOpen)}
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
      {dropdownOpen && <DropdownComponent dropdownItems={dropdownItems} />}
    </div>
  );
};

export default UserWidgetComponent;
