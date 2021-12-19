import React, { useContext } from "react";
import PropTypes from "prop-types";
import Grid from "components/Grid/Grid";
import CategoryCard from "./EatOutCategoryItem/CategoryCard";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import "./EatOutCategorySection.scss";

const EatOutCategorySection = () => {
  const { restaurantsData, categoriesData, loadingRestaurants } = useContext(
    RestaurantsContext
  );

  const getRestaurantAmount = (category) => {
    return restaurantsData.reduce((total, currentRestaurant) => {
      const adjustedCategory = category;
      const isRestaurantInThisCategory = currentRestaurant.categories.some(
        (restaurantCategory) =>
          restaurantCategory.toLowerCase() === adjustedCategory
      );
      return isRestaurantInThisCategory ? ++total : total;
    }, 0);
  };

  return (
    <section className="categories-section">
      <h2 className="categories-section__title">Categories</h2>
      <Grid breakpointCols={[1, 2, 3, 4, 4]}>
        {categoriesData.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            isLoading={loadingRestaurants}
            numberOfPlaces={getRestaurantAmount(category)}
          />
        ))}
      </Grid>
    </section>
  );
};

EatOutCategorySection.propTypes = {
  restaurantsData: PropTypes.array,
  categoriesData: PropTypes.array,
  loadingRestaurants: PropTypes.bool,
};
export default EatOutCategorySection;
