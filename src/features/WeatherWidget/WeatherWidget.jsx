import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import thunder from "../../assets/WeatherWidget/thunder.svg";
import cloud from "../../assets/WeatherWidget/cloud.svg";
import rain from "../../assets/WeatherWidget/rain.svg";
import humidity from "../../assets/WeatherWidget/humidity.svg";
import snow from "../../assets/WeatherWidget/snow.svg";
import wind from "../../assets/WeatherWidget/wind.svg";
import sun from "../../assets/WeatherWidget/sun.svg";
import {
  getCurrentWeekDay,
  getCurrentDay,
  getCurrentMonth,
} from "../../utils/dates.js";
import "./WeatherWidget.scss";

const WeatherWidget = ({ city }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch(() => {
        setError(
          "Whoops! Something went under the weather while trying to show current weather :/"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [city]);

  const getTodayDate = () => {
    return `${getCurrentWeekDay()}, ${getCurrentDay()} ${getCurrentMonth()}`;
  };

  const getImage = (condition) => {
    switch (condition) {
      case "Thunderstorm":
        return thunder;
      case "Clouds":
        return cloud;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return sun;

      default:
        return "";
    }
  };

  const countryName = new Intl.DisplayNames(["en"], { type: "region" });

  return (
    <div className="weather-widget">
      {error && <div className="weather-widget__message">{error}</div>}
      {isLoading && <div className="weather-widget__message">Loading...</div>}
      {weatherData.name && (
        <>
          <div className="weather-widget__location">
            {getTodayDate()} | {weatherData.name},{" "}
            {countryName.of(weatherData.sys.country)}
          </div>
          <div>
            <div className="weather-widget__main">
              <div className="weather-widget__temperature">
                {Math.round(weatherData.main.temp)}°
              </div>
              <div className="weather-widget__condition">
                {weatherData.weather[0].main}
              </div>
            </div>
            <div className="weather-widget__details">
              <div className="weather-widget__info">
                <img src={wind} alt="Wind" />
                {weatherData.wind.speed.toFixed(1)} m/s
              </div>
              <div className="weather-widget__info">
                <img src={humidity} alt="Humidity" />
                {weatherData.main.humidity} %
              </div>
            </div>
          </div>
          <div className="weather-widget__image">
            <img
              src={getImage(weatherData.weather[0].main)}
              alt={weatherData.weather[0].main}
            />
          </div>
        </>
      )}
    </div>
  );
};

WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
