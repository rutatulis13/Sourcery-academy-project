import React from "react";
import PropTypes from "prop-types";
import Grid from "components/Grid/Grid";
import CategoryCard from "./CategoryCard";
import { EAT_OUT_CATEGORIES } from "../constants.js";
import "./EatOutCategorySection.scss";

const EatOutCategorySection = ({ restaurantData, categoryList, isLoading }) => {
  const categoryListLowerCase = categoryList.map((categoryListItem) =>
    categoryListItem.toLowerCase()
  );

  const categoryListFiltered = Object.values(
    EAT_OUT_CATEGORIES
  ).filter((categoryName) => categoryListLowerCase.includes(categoryName));

  const getRestaurantAmount = (category) => {
    return restaurantData.reduce((total, currentRestaurant) => {
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
        {categoryListFiltered.map((category) => (
          <CategoryCard
            key={category}
            category={category}
            isLoading={isLoading}
            numberOfPlaces={getRestaurantAmount(category)}
          />
        ))}
      </Grid>
    </section>
  );
};

EatOutCategorySection.propTypes = {
  restaurantData: PropTypes.string,
  categoryList: PropTypes.string,
  isLoading: PropTypes.bool,
};
export default EatOutCategorySection;
