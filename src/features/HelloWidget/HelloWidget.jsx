import React from "react";

import Clock from "./Clock";
import Greeting from "./Greeting";

import "./HelloWidget.scss";

const HelloWidget = (username = "User") => {
  return (
    <div className="hello-widget">
      <Clock />
      <Greeting name={username} />
    </div>
  );
};

export default HelloWidget;
