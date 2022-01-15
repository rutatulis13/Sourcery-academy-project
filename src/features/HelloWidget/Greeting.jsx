import React, { useContext } from "react";
import { UserContext } from "contexts/UserContext/UserContext";
import "./HelloWidget.scss";

const Greeting = () => {
  const { userData, loading } = useContext(UserContext);

  const getUserName = () => {
    if (!loading && userData) {
      return userData.userName ?? "User";
    }
  };

  const userName = getUserName();
  const hours = new Date().getHours();

  const greeting = () => {
    if (hours >= 5 && hours < 12) {
      return `Good morning, ${userName}!`;
    } else if (hours >= 12 && hours < 18) {
      return `Good afternoon, ${userName}!`;
    } else {
      return `Good evening, ${userName}!`;
    }
  };

  return <h1 className="hello-widget__greeting">{greeting()}</h1>;
};

export default Greeting;
