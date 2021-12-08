import React from "react";
import "./RestaurantCard.scss";
import { ReactComponent as PersonCheckIn } from "assets/person-check-in.svg";
import { ReactComponent as Ellipse } from "assets/ellipse.svg";
import RestaurantRating from "components/RestaurantRating/RestaurantRating";
import PropTypes from "prop-types";
import { getRestaurantAverageRating } from "utils/restaurants";
import { convertToMonSunWeekFormat } from "utils/dates";
import { weekDayNameToNumber } from "utils/dates";
import LikeButton from "components/LikeButton/LikeButton";

const RestaurantCard = ({ restaurant }) => {
  const getTodayWorkingHours = (hoursArray) => {
    let result = "CLOSED TODAY";
    if (Array.isArray(hoursArray)) {
      const currentWeekDay = convertToMonSunWeekFormat(new Date().getDay());
      hoursArray.forEach((workingHourPeriod) => {
        const [fromWeekDayName, toWeekDayName] = workingHourPeriod.days.split(
          " - "
        );
        if (
          currentWeekDay >= weekDayNameToNumber(fromWeekDayName, true) &&
          currentWeekDay <= weekDayNameToNumber(toWeekDayName, true)
        ) {
          result = workingHourPeriod.hours;
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
          {restaurant.categories.map((categoryName, index) => (
            <span key={`${index}_${categoryName}`}>
              {index > 0 ? <Ellipse /> : ""}
              {categoryName}
            </span>
          ))}
        </div>
        <div className="restaurant-card__title">
          <span>{restaurant.name}</span>{" "}
          <LikeButton itemDataAccessor="restaurants" itemId={restaurant.id} />
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
