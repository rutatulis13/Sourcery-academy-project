import React from "react";
import "./TopBar.scss";
import UserWidgetComponent from "../UserWidget/UserWidgetComponent/UserWidget.jsx";
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__content">
        <UserWidgetComponent />
      </div>
    </div>
  );
};

export default TopBar;
