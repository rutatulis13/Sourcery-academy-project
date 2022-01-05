import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Button/Button";
import { ReactComponent as StarRating } from "assets/star-rating.svg";
import "./RestaurantReviewsList.scss";
import { useEffect } from "react";

const RestaurantReviewsList = ({ reviews }) => {
  const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState(false);
  const [reviewsToShow, setReviewsToShow] = useState([]);

  useEffect(() => {
    const slicedReviews = reviews.slice(0, 3);
    setReviewsToShow(slicedReviews);
    if (slicedReviews.length < reviews.length) {
      setIsShowMoreButtonVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onShowMoreReviews = () => {
    setReviewsToShow(reviews);
    setIsShowMoreButtonVisible(false);
  };

  return (
    reviews && (
      <div className="restaurant-reviews-list-container">
        <ul className="restaurant-reviews-list">
          {reviewsToShow.map((review) => (
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
  reviews: PropTypes.array.isRequired,
};

export default RestaurantReviewsList;
