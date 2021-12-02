import React, { useState } from "react";
import PropTypes from "prop-types";
import "./RestaurantRating.scss";
import { ReactComponent as StarRating } from "assets/star-rating.svg";

const RestaurantRating = ({ value, userValue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ratingHovered, setRatingHovered] = useState(-1);

  const rateRestaurant = (rating) => {
    // eslint-disable-next-line no-console
    console.log(`rated restaurant with ${rating} stars`); // TODO: Create restaurants rating system
  };

  return (
    <div
      className="restaurant-rating"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {Array(5)
        .fill(null)
        .map((v, i) => (
          <button
            aria-label={`Rate restaurant with ${i} star of 5`}
            key={i}
            className={`rating-star${
              isExpanded || i === 0 ? " rating-star--show" : ""
            }`}
            onClick={() => rateRestaurant(i + 1)}
            onMouseEnter={() => setRatingHovered(i + 1)}
            onMouseLeave={() => setRatingHovered(-1)}
          >
            <StarRating
              className={`rating-star__icon${
                ratingHovered >= i + 1 ||
                (i === 0 && !isExpanded) ||
                (i <= userValue - 1 && ratingHovered === -1)
                  ? " rating-star__icon--filled"
                  : ""
              }`}
              alt=""
            />
          </button>
        ))}
      <div className="rating-star"></div>
      <div className="rating-value">{value.toFixed(1)}</div>
    </div>
  );
};

RestaurantRating.propTypes = {
  value: PropTypes.number.isRequired,
  userValue: PropTypes.number,
};

RestaurantRating.defaultProps = {
  userValue: -1,
};

export default RestaurantRating;
