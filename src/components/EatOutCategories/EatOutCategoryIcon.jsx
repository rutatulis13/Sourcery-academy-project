import React from "react";
import PropTypes from "prop-types";
import ramen from "assets/RestaurantCategoriesIcons/ramen.svg";
import pizza from "assets/RestaurantCategoriesIcons/pizza.svg";
import pancakes from "assets/RestaurantCategoriesIcons/pancakes.svg";
import salads from "assets/RestaurantCategoriesIcons/salads.svg";
import sandwich from "assets/RestaurantCategoriesIcons/sandwich.svg";
import burger from "assets/RestaurantCategoriesIcons/burger.svg";
import sushi from "assets/RestaurantCategoriesIcons/sushi.svg";
import soups from "assets/RestaurantCategoriesIcons/soups.svg";
import kebab from "assets/RestaurantCategoriesIcons/kebab.svg";
import brunch from "assets/RestaurantCategoriesIcons/brunch.svg";
import sweets from "assets/RestaurantCategoriesIcons/sweets.svg";
import grill from "assets/RestaurantCategoriesIcons/grill.svg";
import { EAT_OUT_CATEGORIES } from "./constants.js";
import "./EatOutCategoryIcon.scss";

const EatOutCategoryIcon = ({ category }) => {
  let component;
  switch (category) {
    case EAT_OUT_CATEGORIES.RAMEN:
      component = (
        <img
          className="categories__link-icon"
          src={ramen}
          alt="Bowl of Ramen"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.PIZZA:
      component = (
        <img
          className="categories__link-icon"
          src={pizza}
          alt="Slice of Pizza"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SALADS:
      component = (
        <img
          className="categories__link-icon"
          src={salads}
          alt="Plate of Salads"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.PANCAKES:
      component = (
        <img
          className="categories__link-icon"
          src={pancakes}
          alt="Pile of Pancakes"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SANDWICH:
      component = (
        <img className="categories__link-icon" src={sandwich} alt="Sandwich" />
      );
      break;
    case EAT_OUT_CATEGORIES.BURGER:
      component = (
        <img className="categories__link-icon" src={burger} alt="Burger" />
      );
      break;
    case EAT_OUT_CATEGORIES.SUSHI:
      component = (
        <img
          className="categories__link-icon"
          src={sushi}
          alt="Four Sushi Rolls"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SOUPS:
      component = (
        <img className="categories__link-icon" src={soups} alt="Bowl of Soup" />
      );
      break;
    case EAT_OUT_CATEGORIES.KEBAB:
      component = (
        <img className="categories__link-icon" src={kebab} alt="Kebab" />
      );
      break;
    case EAT_OUT_CATEGORIES.BRUNCH:
      component = (
        <img
          className="categories__link-icon"
          src={brunch}
          alt="Two Fried Eggs"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SWEETS:
      component = (
        <img
          className="categories__link-icon"
          src={sweets}
          alt="Donut Covered with Chocolate"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.GRILL:
      component = (
        <img
          className="categories__link-icon"
          src={grill}
          alt="Two Grilled Meat Skewers"
        />
      );
      break;
    default:
      component = <div></div>;
  }
  return <figure>{component}</figure>;
};

EatOutCategoryIcon.propTypes = {
  category: PropTypes.oneOf([
    "ramen",
    "pizza",
    "salads",
    "pancakes",
    "sandwich",
    "burger",
    "sushi",
    "soups",
    "Kebab",
    "brunch",
    "sweets",
    "grill",
  ]),
  EAT_OUT_CATEGORIES: PropTypes.object,
};
export default EatOutCategoryIcon;
