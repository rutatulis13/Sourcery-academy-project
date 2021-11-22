import React, { useState, useEffect } from "react";

import "./HelloWidget.scss";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  let getTimeString = () => {
    if (date.getMinutes() < 10) {
      return `${date.getHours()}:0${date.getMinutes()}`;
    }
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return <div className="hello-widget__clock">{getTimeString()}</div>;
};

export default Clock;
