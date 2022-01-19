import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./RestaurantRating.scss";
import { UserContext } from "contexts/UserContext/UserContext";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import { ReactComponent as StarRating } from "assets/star-rating.svg";
import { getRestaurantAverageRating } from "utils/restaurants";

const RestaurantRating = ({ restaurantId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [ratingHovered, setRatingHovered] = useState(-1);
  const [averageRating, setAverageRating] = useState(0);
  const [userRating, setUserRating] = useState(-1);
  const { userData } = useContext(UserContext);
  const { restaurantsData, setRestaurantsData } = useContext(
    RestaurantsContext
  );

  useEffect(() => {
    const restaurant = restaurantsData.find(({ id }) => id === restaurantId);
    if (restaurant) {
      setAverageRating(getRestaurantAverageRating(restaurant));
      if (userData?.userName) {
        const userReview = restaurant.reviews.find(
          ({ userName }) => userName === userData.userName
        );
        if (userReview) {
          setUserRating(userReview.rating);
        }
      }
      setIsLoaded(true);
    }
  }, [restaurantsData, userData, restaurantId]);

  const rateRestaurant = (rating) => {
    if (isExpanded && userData?.userName) {
      const restaurantIndex = restaurantsData.findIndex(
        ({ id }) => id === restaurantId
      );
      setRestaurantsData((currentRestaurantsData) => {
        const nextRestaurantsData = [...currentRestaurantsData];
        const currentReviewIndex = nextRestaurantsData[
          restaurantIndex
        ].reviews.findIndex(({ userName }) => userName === userData.userName);
        const userReview = {
          userName: userData.userName,
          rating: rating,
        };
        if (currentReviewIndex === -1) {
          nextRestaurantsData[restaurantIndex].reviews.push(userReview);
        } else {
          nextRestaurantsData[restaurantIndex].reviews[
            currentReviewIndex
          ] = userReview;
        }
        return nextRestaurantsData;
      });
    }
  };

  return (
    isLoaded && (
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
                (voteValue <= userRating && ratingHovered === -1),
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
        <div className="rating-value">{averageRating.toFixed(1)}</div>
      </div>
    )
  );
};

RestaurantRating.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

RestaurantRating.defaultProps = {
  userValue: -1,
};

export default RestaurantRating;
