import React from "react";
import "./TopBar.scss";
import AvatarComponent from "../UserWidget/AvatarComponent/AvatarComponent.jsx";
const TopBar = () => {
  return (
    <div className="top-bar">
      <AvatarComponent />
    </div>
  );
};

export default TopBar;
