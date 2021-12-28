import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Location } from "assets/restaurantInformationCardIcons/location.svg";
import { ReactComponent as Website } from "assets/restaurantInformationCardIcons/website.svg";
import { ReactComponent as Phone } from "assets/restaurantInformationCardIcons/phone.svg";
import { ReactComponent as Clock } from "assets/restaurantInformationCardIcons/clock.svg";

import "./RestaurantInformationCard.scss";

const RestaurantInformationCard = ({ restaurant }) => {
  const workHours = restaurant.openingHours.reduce(
    (previousValue, currentValue, currentIndex, array) =>
      `${previousValue}${currentValue.days} ${currentValue.hours}${
        currentIndex < array.length - 1 ? ", " : ""
      }`,
    ""
  );

  return (
    restaurant?.id && (
      <ul className="restaurant-information-card">
        <li className="restaurant-information-card__item">
          <Location className="restaurant-information-card__item-icon" />
          <div className="restaurant-information-card__item-text-wrapper">
            <h3 className="restaurant-information-card__item-name">Address</h3>
            <span className="restaurant-information-card__item-value">
              {restaurant.location.address}
            </span>
          </div>
        </li>
        <li className="restaurant-information-card__item">
          <Website className="restaurant-information-card__item-icon" />
          <div className="restaurant-information-card__item-text-wrapper">
            <h3 className="restaurant-information-card__item-name">Website</h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={restaurant.website}
              className="restaurant-information-card__item-value"
            >
              {restaurant.website.replace(/(^\w+:|^)\/\//, "")}
            </a>
          </div>
        </li>
        <li className="restaurant-information-card__item">
          <Phone className="restaurant-information-card__item-icon" />
          <div className="restaurant-information-card__item-text-wrapper">
            <h3 className="restaurant-information-card__item-name">
              Phone number
            </h3>
            <a
              href={`tel:${restaurant.phone}`}
              className="restaurant-information-card__item-value"
            >
              {restaurant.phone}
            </a>
          </div>
        </li>
        <li className="restaurant-information-card__item">
          <Clock className="restaurant-information-card__item-icon" />
          <div className="restaurant-information-card__item-text-wrapper">
            <h3 className="restaurant-information-card__item-name">
              Work hours
            </h3>
            <span className="restaurant-information-card__item-value">
              {/* Monday - sunday 12:00 - 24 :00 */}
              {workHours}
            </span>
          </div>
        </li>
      </ul>
    )
  );
};

RestaurantInformationCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantInformationCard;
