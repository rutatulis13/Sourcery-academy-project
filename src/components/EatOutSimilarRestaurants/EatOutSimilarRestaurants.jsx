import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import RestaurantsSlider from "components/RestaurantsSlider/RestaurantsSlider";

const EatOutSimilarRestaurants = ({ categories }) => {
  const { restaurantsData } = useContext(RestaurantsContext);

  const restaurantsByCategory = restaurantsData.filter((restaurant) =>
    restaurant.categories.some((category) => categories.indexOf(category) >= 0)
  );

  return (
    <RestaurantsSlider
      title="Also you could like"
      restaurants={restaurantsByCategory}
    />
  );
};

EatOutSimilarRestaurants.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default EatOutSimilarRestaurants;
