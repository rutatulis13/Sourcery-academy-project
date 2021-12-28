import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EatOutCategoryIcon from "./EatOutCategoryIcon";
import "./CategoryCard.scss";

const CategoryCard = ({ isLoading, category, numberOfPlaces }) => {
  return (
    <Link
      to={"/eat-out/" + category}
      key={category}
      className="categories__link"
    >
      <div className="categories__link-item">
        <h2 className="categories__link-title">{category}</h2>
        <span className="categories__link-text">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <div>
              {numberOfPlaces > 1 || numberOfPlaces === 0
                ? numberOfPlaces + " places"
                : numberOfPlaces + " place"}
            </div>
          )}
        </span>
      </div>
      <EatOutCategoryIcon category={category} />
    </Link>
  );
};

CategoryCard.propTypes = {
  isLoading: PropTypes.bool,
  category: PropTypes.string,
  numberOfPlaces: PropTypes.number,
};

export default CategoryCard;
