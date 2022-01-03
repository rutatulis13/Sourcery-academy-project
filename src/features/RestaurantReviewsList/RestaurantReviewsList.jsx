import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";
import { ReactComponent as StarRating } from "assets/star-rating.svg";
import "./RestaurantReviewsList.scss";
import { useEffect } from "react";

const RestaurantReviewsList = ({ restaurant }) => {
  const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const slicedReviews = restaurant.reviews.slice(0, 3);
    setReviews(slicedReviews);
    if (slicedReviews.length < restaurant.reviews.length) {
      setIsShowMoreButtonVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onShowMoreReviews = () => {
    setReviews(restaurant.reviews);
    setIsShowMoreButtonVisible(false);
  };

  return (
    restaurant && (
      <div className="restaurant-reviews-list-container">
        <ul className="restaurant-reviews-list">
          {reviews.map((review) => (
            <li key={review.id} className="restaurant-reviews-list__item">
              <h3 className="restaurant-reviews-list__item-name">
                {review.userName}
              </h3>
              <div className="restaurant-reviews-list__item-rating">
                <StarRating />
                {review.rating.toFixed(1)}
              </div>
              <p className="restaurant-reviews-list__item-comment">
                {review.comment}
              </p>
            </li>
          ))}
        </ul>
        {isShowMoreButtonVisible && (
          <Button type="button" size="medium" onClick={onShowMoreReviews}>
            Show more
          </Button>
        )}
      </div>
    )
  );
};

RestaurantReviewsList.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default RestaurantReviewsList;
