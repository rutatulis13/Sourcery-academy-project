import React from "react";
import "./TopBar.scss";
import AvatarComponent from "../UserWidget/AvatarComponent/AvatarComponent.jsx";
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__content">
        <AvatarComponent />
      </div>
    </div>
  );
};

export default TopBar;
