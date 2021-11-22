import React from "react";
import PropTypes from "prop-types";

import "./HelloWidget.scss";

const Greeting = ({ name }) => {
  let date = new Date();
  let hours = date.getHours();

  const greeting = () => {
    if (hours >= 5 && hours < 12) {
      return `Good morning, ${name}!`;
    } else if (hours >= 12 && hours < 18) {
      return `Good afternoon, ${name}!`;
    } else {
      return `Good evening, ${name}!`;
    }
  };

  return <div className="hello-widget__greeting">{greeting()}</div>;
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
