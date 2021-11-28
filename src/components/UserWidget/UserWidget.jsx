import React, { useState, useEffect, useRef } from "react";
import DropdownComponent from "../DropdownComponent/Dropdown.jsx";
import "./UserWidget.scss";
import avatarImage from "../../assets/avatar.png";
import badgeImage from "../../assets/arrowDown.svg";
import settingsImage from "../../assets/settings.svg";
import logoutImage from "../../assets/logOut.svg";

const UserWidgetComponent = () => {
  const node = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = [
    { iconPath: settingsImage, text: "Settings" },
    { iconPath: logoutImage, text: "Log-out" },
  ];

  const handleAvatarClick = (e) => {
    if (!node.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };
  const handleKeyboardClick = (e) => {
    if (e.keyCode === 27) {
      setDropdownOpen(false);
    }
    if (e.keyCode === 13) {
      setDropdownOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardClick);
    document.addEventListener("mousedown", handleAvatarClick);
    return () => {
      document.removeEventListener("keydown", handleKeyboardClick);
      document.removeEventListener("mousedown", handleAvatarClick);
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
