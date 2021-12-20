import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./RestaurantCard.scss";
import LikeButton from "components/LikeButton/LikeButton";
import RestaurantRating from "components/RestaurantRating/RestaurantRating";
import { ReactComponent as PersonCheckIn } from "assets/person-check-in.svg";
import { ReactComponent as Ellipse } from "assets/ellipse.svg";
import { ReactComponent as Website } from "assets/website.svg";
import { ReactComponent as Location } from "assets/location.svg";
import { convertToMonSunWeekFormat } from "utils/dates";
import { weekDayNameToNumber } from "utils/dates";
import classNames from "classnames";
import CheckInButton from "components/CheckInButton/CheckInButton";

const RestaurantCard = ({ restaurant, large }) => {
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

  const restaurantCardClasses = classNames("restaurant-card", {
    "restaurant-card--large": large,
  });

  const shortDescription =
    restaurant.description.length > 120
      ? restaurant.description.slice(0, 120) + "..."
      : restaurant.description;

  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff ${
      large ? "100" : "80"
    }%), url('${restaurant.image}')`,
    backgroundSize: "cover",
  };

  return (
    <div className={restaurantCardClasses} style={large ? {} : backgroundStyle}>
      {large && (
        <div className="restaurant-card__background" style={backgroundStyle} />
      )}
      <div className="restaurant-card__top">
        {!large && (
          <div className="restaurant-card__checked-in">
            <PersonCheckIn />
            <div>{restaurant.checkIns}</div>
          </div>
        )}
        <div className="restaurant-card__rating-wrapper">
          <RestaurantRating restaurantId={restaurant.id} />
        </div>
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
          <Link to={`/eat-out/restaurant/${restaurant.id}`}>
            <h3>{restaurant.name}</h3>
          </Link>{" "}
          <LikeButton itemDataAccessor="restaurants" itemId={restaurant.id} />
        </div>
        <div className="restaurant-card__time">
          {getTodayWorkingHours(restaurant.openingHours)}
        </div>
        {large && (
          <>
            <div className="restaurant-card__website">
              <Website className="restaurant-card__info-icon" />{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={restaurant.website}
                className="restaurant-card__website-link"
              >
                {restaurant.website.replace(/(^\w+:|^)\/\//, "")}
              </a>
            </div>
            <div className="restaurant-card__address">
              <Location className="restaurant-card__info-icon" />{" "}
              <span>{restaurant.location.address}</span>
            </div>
            <div className="restaurant-card__description">
              {shortDescription}
            </div>
            <div className="restaurant-card__links">
              <Link
                className="restaurant-card__read-more-link"
                to={`/eat-out/restaurant/${restaurant.id}`}
              >
                Read more
              </Link>
              <CheckInButton restaurantId={restaurant.id} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
  large: PropTypes.bool,
};

export default RestaurantCard;
