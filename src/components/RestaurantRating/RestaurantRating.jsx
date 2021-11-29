import React from "react";
import "./RestaurantRating.scss";
import { ReactComponent as StarRating } from "assets/star-rating.svg";

const RestaurantRating = () => {
  return (
    <div className="restaurant-rating">
      <StarRating className="rating-star rating-star--filled" />
      <StarRating className="rating-star rating-star--filled" />
      <StarRating className="rating-star rating-star--filled" />
      <StarRating className="rating-star rating-star--filled" />
      <StarRating className="rating-star rating-star" />
      <div className="rating-value">4.5</div>
    </div>
  );
};

export default RestaurantRating;
