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
import "./EatOutCategories.scss";

const EatOutCategoryIcon = ({ name }) => {
  let component;
  switch (name) {
    case "Ramen":
      component = (
        <img
          className="categories__link-icon"
          src={ramen}
          alt="Bowl of Ramen"
        />
      );
      break;
    case "Pizza":
      component = (
        <img
          className="categories__link-icon"
          src={pizza}
          alt="Slice of Pizza"
        />
      );
      break;
    case "Salads":
      component = (
        <img
          className="categories__link-icon"
          src={salads}
          alt="Plate of Salads"
        />
      );
      break;
    case "Pancakes":
      component = (
        <img
          className="categories__link-icon"
          src={pancakes}
          alt="Pile of Pancakes"
        />
      );
      break;
    case "Sandwich":
      component = (
        <img className="categories__link-icon" src={sandwich} alt="Sandwich" />
      );
      break;
    case "Burger":
      component = (
        <img className="categories__link-icon" src={burger} alt="Burger" />
      );
      break;
    case "Sushi":
      component = (
        <img
          className="categories__link-icon"
          src={sushi}
          alt="Four Sushi Rolls"
        />
      );
      break;
    case "Soups":
      component = (
        <img className="categories__link-icon" src={soups} alt="Bowl of Soup" />
      );
      break;
    case "Kebab":
      component = (
        <img className="categories__link-icon" src={kebab} alt="Kebab" />
      );
      break;
    case "Brunch":
      component = (
        <img
          className="categories__link-icon"
          src={brunch}
          alt="Two Fried Eggs"
        />
      );
      break;
    case "Sweets":
      component = (
        <img
          className="categories__link-icon"
          src={sweets}
          alt="Donut Covered with Chocolate"
        />
      );
      break;
    case "Grill":
      component = (
        <img
          className="categories__link-icon"
          src={grill}
          alt="Two Grilled Meat Skewers"
        />
      );
      break;
    default:
      component = <div />;
  }
  return <figure>{component}</figure>;
};

EatOutCategoryIcon.propTypes = {
  name: PropTypes.string,
};
export default EatOutCategoryIcon;
