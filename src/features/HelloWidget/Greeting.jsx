import React from "react";
import PropTypes from "prop-types";
import "./HelloWidget.scss";

const Greeting = ({ name }) => {
  const date = new Date();
  const hours = date.getHours();

  const greeting = () => {
    if (hours >= 5 && hours < 12) {
      return `Good morning, ${name}!`;
    } else if (hours >= 12 && hours < 18) {
      return `Good afternoon, ${name}!`;
    } else {
      return `Good evening, ${name}!`;
    }
  };

  return <h1 className="hello-widget__greeting">{greeting()}</h1>;
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
