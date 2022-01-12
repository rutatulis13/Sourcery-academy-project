import React, { useContext } from "react";
import { UserContext } from "contexts/UserContext/UserContext";
import PropTypes from "prop-types";
import "./HelloWidget.scss";

const Greeting = () => {
  const context = useContext(UserContext);

  const getUserName = () => {
    if (!context.loading && context.userData) {
      return context.userData.userName ?? "User";
    }
  };

  const userName = getUserName();
  const date = new Date();
  const hours = date.getHours();

  const greeting = () => {
    if (hours >= 5 && hours < 12) {
      return `Good morning, ${userName}!`;
    } else if (hours >= 12 && hours < 18) {
      return `Good afternoon, ${userName}!`;
    } else {
      return `Good evening, ${userName}!`;
    }
  };

  return <div className="hello-widget__greeting">{greeting()}</div>;
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
