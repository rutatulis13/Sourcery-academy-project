import React from "react";
import PropTypes from "prop-types";
import Clock from "./Clock";
import Greeting from "./Greeting";
import "./HelloWidget.scss";

const HelloWidget = ({ username = "User" }) => {
  return (
    <div className="hello-widget">
      <Clock />
      <Greeting name={username} />
    </div>
  );
};
HelloWidget.propTypes = {
  username: PropTypes.string,
};

export default HelloWidget;
