import React from "react";
import PropTypes from "prop-types";
import Grid from "components/Grid/Grid";
import EatOutCategoryIcon from "../EatOutCategoryIcon";
import "./Category.scss";

const Category = ({ dataRestaurants, dataCategories, isLoading }) => {
  const numOfRest = (name) => {
    const sum = dataRestaurants
      .map(
        (item) =>
          item.categories.filter(
            (item) => item === (name === "Brunch" ? "Breakfast" : name)
          ).length
      )
      .reduce((prevValue, currValue) => prevValue + currValue, 0);
    return sum;
  };

  const correctNumbers = (name) => {
    if (name === "Sweets") {
      return Number(numOfRest("Sweets")) + Number(numOfRest("Donuts"));
    } else if (name === "Sandwich") {
      return Number(numOfRest("Sandwich")) + Number(numOfRest("Hot dogs"));
    } else {
      return numOfRest(name);
    }
  };

  return (
    <section className="categories-section">
      <h2 className="categories-section__title">Categories</h2>
      <Grid breakpointCols={[1, 2, 3, 4, 4, 4]}>
        {dataCategories.map((name) => (
          <a
            key={name}
            className={
              name === "Donuts" || name === "Hot dogs"
                ? "categories__link--hidden"
                : "categories__link"
            }
            href="eat-out-next-page"
          >
            <div className="categories__link-item">
              <h2 className="categories__link-title">
                {name === "Breakfast" ? "Brunch" : name}
                <span className="categories__link-text">
                  {isLoading ? (
                    <div>Loading</div>
                  ) : (
                    <div>
                      {correctNumbers(name) > 1
                        ? correctNumbers(name) + " places"
                        : correctNumbers(name) + " place"}
                    </div>
                  )}
                </span>
              </h2>
            </div>
            <figure>
              <EatOutCategoryIcon name={name} />
            </figure>
          </a>
        ))}
      </Grid>
    </section>
  );
};

Category.propTypes = {
  dataRestaurants: PropTypes.string,
  dataCategories: PropTypes.string,
  isLoading: PropTypes.bool,
  name: PropTypes.string,
};
export default Category;
