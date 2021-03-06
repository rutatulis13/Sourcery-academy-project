import React, { useState, useEffect, useRef, useContext } from "react";
import DropdownComponent from "../DropdownComponent/Dropdown.jsx";
import "./UserWidget.scss";
import badgeImage from "../../assets/arrowDown.svg";
import settingsImage from "../../assets/settings.svg";
import logoutImage from "../../assets/logOut.svg";
import { AuthContext } from "components/AuthContext/AuthContext";
import { UserContext } from "contexts/UserContext/UserContext";

const UserWidgetComponent = () => {
  const node = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const dropdownItems = [
    { iconPath: settingsImage, text: "Settings" },
    {
      iconPath: logoutImage,
      text: "Log-out",
      func: () => {
        logout();
      },
    },
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
  };
  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
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

  const { userData } = useContext(UserContext);

  return (
    <div
      ref={node}
      className="user-widget"
      role="button"
      tabIndex="0"
      onClick={(e) => setDropdownOpen(!dropdownOpen)}
      onKeyPress={(e) => {
        handleEnterClick(e);
      }}
    >
      {userData && (
        <img
          src={userData.userImage}
          alt="avatar"
          className="user-widget__avatar"
        />
      )}
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
