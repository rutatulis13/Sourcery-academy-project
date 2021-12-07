import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "components/UserContext/UserContext";
import { ReactComponent as Heart } from "assets/heart.svg";
import "./LikeButton.scss";

const LikeButton = ({ restaurantId }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [isRestaurantLiked, setIsRestaurantLiked] = useState(false);

  useEffect(() => {
    if (
      userData?.liked?.restaurants &&
      Array.isArray(userData.liked.restaurants)
    ) {
      setIsRestaurantLiked(
        userData.liked.restaurants.reduce(
          (resultValue, { id }) => (id === restaurantId ? true : resultValue),
          false
        )
      );
    }
  }, [userData, restaurantId]);

  const likeRestaurant = () => {
    setUserData((currentUserData) => {
      let nextUserData = { ...currentUserData };
      if (
        currentUserData?.liked?.restaurants &&
        Array.isArray(currentUserData.liked.restaurants)
      ) {
        nextUserData.liked.restaurants.push({ id: restaurantId });
      }
      return nextUserData;
    });
  };

  const unlikeRestaurant = () => {
    setUserData((currentUserData) => {
      let nextUserData = { ...currentUserData };
      if (
        currentUserData?.liked?.restaurants &&
        Array.isArray(currentUserData.liked.restaurants)
      ) {
        nextUserData.liked.restaurants = currentUserData.liked.restaurants.filter(
          ({ id }) => id !== restaurantId
        );
      }
      return nextUserData;
    });
  };

  const clickHandler = () => {
    if (restaurantId) {
      if (isRestaurantLiked) {
        unlikeRestaurant();
      } else {
        likeRestaurant();
      }
    }
  };

  if (userData && Object.keys(userData).length > 0) {
    return (
      <button
        type="button"
        className="heart"
        aria-label={`${isRestaurantLiked ? "Unlike" : "Like"} the restaurant`}
        onClick={clickHandler}
      >
        <Heart
          className={`heart__icon${
            isRestaurantLiked ? " heart__icon--filled" : ""
          }`}
          alt=""
        />
      </button>
    );
  } else {
    return null;
  }
};

LikeButton.propTypes = {
  restaurantId: PropTypes.string,
};

export default LikeButton;
