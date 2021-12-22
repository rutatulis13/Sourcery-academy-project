import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Grid from "components/Grid/Grid";
import CategoryCard from "./EatOutCategoryItem/CategoryCard";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import { EAT_OUT_CATEGORIES } from "components/EatOutCategories/constants.js";
import "./EatOutCategorySection.scss";

const EatOutCategorySection = () => {
  const { restaurantsData, categoriesData, loadingRestaurants } = useContext(
    RestaurantsContext
  );

  const [categoriesDataFiltered, setCategoriesDataFiltered] = useState([
    categoriesData,
  ]);

  useEffect(() => {
    setCategoriesDataFiltered(
      Object.values(EAT_OUT_CATEGORIES).filter((categoryName) =>
        categoriesData.includes(categoryName)
      )
    );
  }, [categoriesData]);

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
        {categoriesDataFiltered.map((category) => (
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
