import React, { useContext } from "react";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import { useUserLocation } from "utils/hooks/useUserLocation";
import { calculateDistance } from "utils/calculateDistance";
import RestaurantsSlider from "components/RestaurantsSlider/RestaurantsSlider";

const EatOutNearYou = () => {
  const { restaurantsData } = useContext(RestaurantsContext);
  const location = useUserLocation();

  const restaurantsByDistance = restaurantsData
    .map((restaurant) => {
      return {
        ...restaurant,
        distance: calculateDistance(location, restaurant.location.coordinates),
      };
    })
    .sort((a, b) => a.distance - b.distance);

  return (
    <RestaurantsSlider
      title="Discover near you"
      restaurants={restaurantsByDistance}
    />
  );
};

export default EatOutNearYou;
