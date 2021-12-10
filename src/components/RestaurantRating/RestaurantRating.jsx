import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./RestaurantRating.scss";
import { ReactComponent as StarRating } from "assets/star-rating.svg";

const RestaurantRating = ({ value, userValue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ratingHovered, setRatingHovered] = useState(-1);

  const rateRestaurant = (rating) => {
    if (isExpanded) {
      // eslint-disable-next-line no-console
      console.log(`rated restaurant with ${rating} stars`);
      // TODO: Create restaurants rating system (after restaurants context is created).
    }
  };

  return (
    <div
      className="restaurant-rating"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {Array(5)
        .fill(null)
        .map((value, index) => {
          const voteValue = index + 1;
          const starButtonClasses = classNames("rating-star", {
            "rating-star--show": isExpanded || index === 0,
          });
          const starImageClasses = classNames("rating-star__icon", {
            "rating-star__icon--filled":
              ratingHovered >= voteValue ||
              (index === 0 && !isExpanded) ||
              (isExpanded <= userValue && ratingHovered === -1),
          });
          return (
            <button
              aria-label={`Rate restaurant with ${voteValue} star${
                voteValue > 1 ? "s" : ""
              } of 5`}
              key={index}
              className={starButtonClasses}
              onClick={() => rateRestaurant(voteValue)}
              onMouseEnter={() => setRatingHovered(voteValue)}
              onMouseLeave={() => setRatingHovered(-1)}
            >
              <StarRating className={starImageClasses} alt="" />
            </button>
          );
        })}
      <div className="rating-star"></div>
      <div className="rating-value">{value.toFixed(1)}</div>
    </div>
  );
};

RestaurantRating.propTypes = {
  value: PropTypes.number.isRequired,
  userValue: PropTypes.number,
  // TODO: make component more flexible by passing only restaurantId to it (after restaurants context is created).
};

RestaurantRating.defaultProps = {
  userValue: -1,
};

export default RestaurantRating;
