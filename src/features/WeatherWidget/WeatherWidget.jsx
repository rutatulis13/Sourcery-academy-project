import React, { useState, useEffect } from "react";
import thunder from "../../assets/thunder.svg";
import cloud from "../../assets/cloud.svg";
import rain from "../../assets/rain.svg";
import rainfall from "../../assets/rainfall.svg";
import snow from "../../assets/snow.svg";
import wind from "../../assets/wind.svg";
import sun from "../../assets/sun.svg";
import {
  getCurrentWeekDay,
  getCurrentDay,
  getCurrentMonth,
} from "../../utils/dates.js";
import "./WeatherWidget.scss";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch("./weather.json")
      .then((response) => {
        return response.json();
      })
      .then(({ weather }) => {
        setWeatherData(weather);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  }, []);

  const currentWeather =
    weatherData.find((item) => {
      return item.weekDay === getCurrentWeekDay();
    }) || {};

  const getTodayDate = () => {
    return `${getCurrentWeekDay()}, ${getCurrentDay()} ${getCurrentMonth()}`;
  };

  const getImage = (condition) => {
    switch (condition) {
      case "Thunderstorm":
        return thunder;
      case "Cloudy":
        return cloud;
      case "Light shower":
        return rain;
      case "Snow":
        return snow;
      case "Sunny":
        return sun;

      default:
        return "";
    }
  };

  return (
    <div className="weather-widget">
      <div className="weather-widget__location">
        {getTodayDate()} | {currentWeather.location}
      </div>
      <div className="weather-widget__bottom">
        <div className="weather-widget__bottom-top">
          <div className="weather-widget__temperature">
            {currentWeather.degreesInCelsius}
          </div>
          <div className="weather-widget__condition">{currentWeather.type}</div>
        </div>
        <div className="weather-widget__bottom-bottom">
          <div className="weather-widget__info">
            <img src={wind} alt="Wind" />
            {currentWeather.wind}
          </div>
          <div className="weather-widget__info">
            <img src={rainfall} alt="Rainfall" />
            {currentWeather.precipitation}
          </div>
        </div>
      </div>
      <div className="weather-widget__image">
        <img src={getImage(currentWeather.type)} alt={currentWeather.type} />
      </div>
    </div>
  );
};

export default WeatherWidget;
