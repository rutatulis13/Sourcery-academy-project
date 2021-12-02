import React from "react";
import "./RestaurantCard.scss";
import { ReactComponent as PersonCheckIn } from "assets/person-check-in.svg";
import { ReactComponent as Ellipse } from "assets/ellipse.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import RestaurantRating from "components/RestaurantRating/RestaurantRating";
import PropTypes from "prop-types";
import { getRestaurantAverageRating } from "utils/restaurants";

const RestaurantCard = ({ restaurant }) => {
  const likeRestaurant = () => {
    // eslint-disable-next-line no-console
    console.log("Like/dislike restaurant"); // TODO: Create restaurants liking system
  };

  const weekDayToNumber = (weekDay) => {
    const weekDays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return weekDays.indexOf(weekDay);
  };

  const getTodayWorkingHours = (hoursArray) => {
    let result = "CLOSED TODAY";
    if (Array.isArray(hoursArray)) {
      let weekDay = new Date().getDay();
      weekDay = weekDay === 0 ? 6 : weekDay - 1; // convert sun-sat to mon-sun
      hoursArray.forEach((v, i) => {
        let daysArr = v.days.split(" - ");
        if (
          weekDay >= weekDayToNumber(daysArr[0]) &&
          weekDay <= weekDayToNumber(daysArr[1])
        ) {
          result = v.hours;
        }
      });
    }
    return result;
  };

  return (
    <div
      className="restaurant-card"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 80%), url('${restaurant.image}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="restaurant-card__top">
        <div className="restaurant-card__check-in">
          <PersonCheckIn />
          <div>{restaurant.checkIns}</div>
        </div>
        <RestaurantRating value={getRestaurantAverageRating(restaurant)} />
      </div>
      <div className="restaurant-card__bottom">
        <div className="restaurant-card__categories">
          {restaurant.categories.map((v, i) => (
            <span key={`${i}_${v}`}>
              {i > 0 ? <Ellipse /> : ""}
              {v}
            </span>
          ))}
        </div>
        <div className="restaurant-card__title">
          <span>{restaurant.name}</span>{" "}
          <button
            className="heart"
            aria-label="Like restaurant"
            onClick={likeRestaurant}
          >
            <Heart className="heart__icon" alt="" />
          </button>
        </div>
        <div className="restaurant-card__time">
          {getTodayWorkingHours(restaurant.openingHours)}
        </div>
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object,
};

export default RestaurantCard;
