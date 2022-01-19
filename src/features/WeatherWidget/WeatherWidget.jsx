import React, { useState, useEffect } from "react";
import thunder from "../../assets/weatherWidget/thunder.svg";
import cloud from "../../assets/weatherWidget/cloud.svg";
import rain from "../../assets/weatherWidget/rain.svg";
import humidity from "../../assets/weatherWidget/humidity.svg";
import snow from "../../assets/weatherWidget/snow.svg";
import wind from "../../assets/weatherWidget/wind.svg";
import sun from "../../assets/weatherWidget/sun.svg";
import {
  getCurrentWeekDay,
  getCurrentDay,
  getCurrentMonth,
} from "../../utils/dates.js";
import { useUserLocation } from "utils/hooks/useUserLocation";
import "./WeatherWidget.scss";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useUserLocation();
  const lat = location.lat;
  const lng = location.lng;

  useEffect(() => {
    if (!lat || !lng) return;
    setIsLoading(true);
    setError(null);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
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
  }, [lat, lng]);

  const getTodayDate = () => {
    return `${getCurrentWeekDay()}, ${getCurrentDay()} ${getCurrentMonth()}`;
  };

  const getImage = (condition) => {
    switch (condition) {
      case "Thunderstorm":
        return thunder;
      case "Clouds":
      case "Dust":
      case "Smoke":
      case "Fog":
      case "Sand":
      case "Ash":
        return cloud;
      case "Rain":
      case "Drizzle":
      case "Mist":
      case "Haze":
      case "Squall":
      case "Tornado":
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
      {(!lat || !lng) && (
        <div className="weather-widget__message">
          Geolocation is not supported
        </div>
      )}
      {isLoading && (
        <div className="weather-widget__message">Loading weather data...</div>
      )}
      {weatherData.name && lat && lng && (
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

export default WeatherWidget;
