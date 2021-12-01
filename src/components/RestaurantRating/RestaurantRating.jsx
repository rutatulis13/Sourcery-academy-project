/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./RestaurantRating.scss";
import { ReactComponent as StarRating } from "assets/star-rating.svg";

const RestaurantRating = ({ value, voteValue }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ratingHovered, setRatingHovered] = useState(-1);
  //const [vote, setVote] = useState(voteValue);

  const rateRestaurant = (rating) => {
    // eslint-disable-next-line no-console
    console.log(rating);
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
          <div
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
                ratingHovered >= i + 1 || (i === 0 && !isExpanded)
                  ? " rating-star__icon--filled"
                  : ""
              }`}
            />
          </div>
        ))}
      <div className="rating-star"></div>
      <div className="rating-value">{value.toFixed(1)}</div>
    </div>
  );
};

RestaurantRating.propTypes = {
  value: PropTypes.number.isRequired,
  voteValue: PropTypes.number,
};

RestaurantRating.defaultProps = {
  voteValue: -1,
};

export default RestaurantRating;
