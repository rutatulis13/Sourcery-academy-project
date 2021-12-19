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

const EatOutCategoryIcon = ({ category }) => {
  let icon;
  switch (category) {
    case EAT_OUT_CATEGORIES.RAMEN:
      icon = (
        <img
          className="categories__link-icon"
          src={ramen}
          alt="Bowl of Ramen"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.PIZZA:
      icon = (
        <img
          className="categories__link-icon"
          src={pizza}
          alt="Slice of Pizza"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SALADS:
      icon = (
        <img
          className="categories__link-icon"
          src={salads}
          alt="Plate of Salads"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.PANCAKES:
      icon = (
        <img
          className="categories__link-icon"
          src={pancakes}
          alt="Pile of Pancakes"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SANDWICH:
      icon = (
        <img className="categories__link-icon" src={sandwich} alt="Sandwich" />
      );
      break;
    case EAT_OUT_CATEGORIES.BURGER:
      icon = (
        <img className="categories__link-icon" src={burger} alt="Burger" />
      );
      break;
    case EAT_OUT_CATEGORIES.SUSHI:
      icon = (
        <img
          className="categories__link-icon"
          src={sushi}
          alt="Four Sushi Rolls"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SOUPS:
      icon = (
        <img className="categories__link-icon" src={soups} alt="Bowl of Soup" />
      );
      break;
    case EAT_OUT_CATEGORIES.KEBAB:
      icon = <img className="categories__link-icon" src={kebab} alt="Kebab" />;
      break;
    case EAT_OUT_CATEGORIES.BRUNCH:
      icon = (
        <img
          className="categories__link-icon"
          src={brunch}
          alt="Two Fried Eggs"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.SWEETS:
      icon = (
        <img
          className="categories__link-icon"
          src={sweets}
          alt="Donut Covered with Chocolate"
        />
      );
      break;
    case EAT_OUT_CATEGORIES.GRILL:
      icon = (
        <img
          className="categories__link-icon"
          src={grill}
          alt="Two Grilled Meat Skewers"
        />
      );
      break;
    default:
      icon = <div></div>;
  }
  return <figure>{icon}</figure>;
};

EatOutCategoryIcon.propTypes = {
  category: PropTypes.oneOf(Object.values(EAT_OUT_CATEGORIES)),
};
export default EatOutCategoryIcon;
