import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "contexts/UserContext/UserContext";
import Button from "components/Button/Button";

const CheckInButton = ({ restaurantId }) => {
  const { userData, setUserData } = useContext(UserContext);
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
    setUserData((currentUserData) => {
      let nextUserData = { ...currentUserData };
      if (!nextUserData?.checkIn?.restaurants) {
        nextUserData.checkIn.restaurants = [];
      }
      nextUserData.checkIn.restaurants.push({ id: restaurantId });
      return nextUserData;
    });
  };

  const checkOutRestaurant = () => {
    setUserData((currentUserData) => {
      let nextUserData = { ...currentUserData };
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
  };

  const clickHandler = () => {
    if (restaurantId && userData?.checkIn) {
      isCheckedIn ? checkOutRestaurant() : checkInRestaurant();
    }
  };

  return (
    <Button type="button" medium onClick={clickHandler}>
      {isCheckedIn ? "check-out" : "check-in"}
    </Button>
  );
};

CheckInButton.propTypes = {
  restaurantId: PropTypes.string.isRequired,
};

export default CheckInButton;
