import React from "react";
import PropTypes from "prop-types";
import ramen from "assets/restaurantCategoriesIcons/ramen.svg";
import pizza from "assets/restaurantCategoriesIcons/pizza.svg";
import pancakes from "assets/restaurantCategoriesIcons/pancakes.svg";
import salads from "assets/restaurantCategoriesIcons/salads.svg";
import sandwich from "assets/restaurantCategoriesIcons/sandwich.svg";
import burger from "assets/restaurantCategoriesIcons/burger.svg";
import sushi from "assets/restaurantCategoriesIcons/sushi.svg";
import soups from "assets/restaurantCategoriesIcons/soups.svg";
import kebab from "assets/restaurantCategoriesIcons/kebab.svg";
import brunch from "assets/restaurantCategoriesIcons/brunch.svg";
import sweets from "assets/restaurantCategoriesIcons/sweets.svg";
import grill from "assets/restaurantCategoriesIcons/grill.svg";
import { EAT_OUT_CATEGORIES } from "../constants.js";
import "./EatOutCategoryIcon.scss";

const availableIcons = [
  {
    categoryName: EAT_OUT_CATEGORIES.RAMEN,
    image: ramen,
    altText: "Bowl of Ramen",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.PIZZA,
    image: pizza,
    altText: "Slice of Pizza",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.SALADS,
    image: salads,
    altText: "Plate of Salads",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.PANCAKES,
    image: pancakes,
    altText: "Pile of Pancakes",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.SANDWICH,
    image: sandwich,
    altText: "Sandwich",
  },
  { categoryName: EAT_OUT_CATEGORIES.BURGER, image: burger, altText: "Burger" },
  {
    categoryName: EAT_OUT_CATEGORIES.SUSHI,
    image: sushi,
    altText: "Four Sushi Rolls",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.SOUPS,
    image: soups,
    altText: "Bowl of Soup",
  },
  { categoryName: EAT_OUT_CATEGORIES.KEBAB, image: kebab, altText: "Kebab" },
  {
    categoryName: EAT_OUT_CATEGORIES.BRUNCH,
    image: brunch,
    altText: "Two Fried Eggs",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.SWEETS,
    image: sweets,
    altText: "Donut Covered with Chocolate",
  },
  {
    categoryName: EAT_OUT_CATEGORIES.GRILL,
    image: grill,
    altText: "Two Grilled Meat Skewers",
  },
];

const EatOutCategoryIcon = ({ category }) => {
  const iconInfo = availableIcons.find(
    ({ categoryName }) => categoryName === category
  );

  const icon = iconInfo ? (
    <img
      className="eat-out-category-icon"
      src={iconInfo.image}
      alt={iconInfo.altText}
    ></img>
  ) : (
    <div></div>
  );

  return <figure>{icon}</figure>;
};

EatOutCategoryIcon.propTypes = {
  category: PropTypes.oneOf(Object.values(EAT_OUT_CATEGORIES)),
};
export default EatOutCategoryIcon;
