import React, { useContext } from "react";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import RestaurantsSlider from "components/RestaurantsSlider/RestaurantsSlider";

const EatOutNewPlaces = () => {
  const { restaurantsData } = useContext(RestaurantsContext);

  const restaurantsByDate = restaurantsData
    .map((restaurant) => {
      return { ...restaurant };
    })
    .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));

  return (
    <RestaurantsSlider title="New Places" restaurants={restaurantsByDate} />
  );
};

export default EatOutNewPlaces;
