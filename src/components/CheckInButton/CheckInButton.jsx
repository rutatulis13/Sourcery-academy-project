import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { addRestaurantCheckIns } from "utils/restaurants";
import { UserContext } from "contexts/UserContext/UserContext";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import Button from "components/Button/Button";

const CheckInButton = ({ restaurantId }) => {
  const { userData, setUserData } = useContext(UserContext);
  const { setRestaurantsData } = useContext(RestaurantsContext);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  useEffect(() => {
    setIsCheckedIn(() => {
      if (userData?.checkIn?.restaurants) {
        return userData.checkIn.restaurants.some(
          ({ id }) => id === restaurantId
        );
      }
      return false;
    });
  }, [userData, restaurantId]);

  const checkInRestaurant = () => {
    if (!isCheckedIn) {
      setUserData((currentUserData) => {
        const nextUserData = { ...currentUserData };
        if (!nextUserData?.checkIn?.restaurants) {
          nextUserData.checkIn.restaurants = [];
        }
        nextUserData.checkIn.restaurants.push({ id: restaurantId });
        return nextUserData;
      });
      addRestaurantCheckIns(setRestaurantsData, restaurantId, 1);
    }
  };

  const checkOutRestaurant = () => {
    if (isCheckedIn) {
      setUserData((currentUserData) => {
        const nextUserData = { ...currentUserData };
        if (
          currentUserData?.checkIn?.restaurants &&
          Array.isArray(currentUserData?.checkIn?.restaurants)
        ) {
          nextUserData.checkIn.restaurants = currentUserData.checkIn.restaurants.filter(
            ({ id }) => id !== restaurantId
          );
        }
        return nextUserData;
      });
      addRestaurantCheckIns(setRestaurantsData, restaurantId, -1);
    }
  };

  const clickHandler = () => {
    if (restaurantId && userData?.checkIn) {
      isCheckedIn ? checkOutRestaurant() : checkInRestaurant();
    }
  };

  return (
    <Button type="button" size="medium" onClick={clickHandler}>
      {isCheckedIn ? "check-out" : "check-in"}
    </Button>
  );
};

CheckInButton.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

export default CheckInButton;
