import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Category.scss";

const Category = ({ title, image, altText }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
      );
      const data = await response.json();
      setData(data.restaurants);
      setIsLoading(false);
    })();
  }, []);

  const sum = data
    .map((item) =>
      item.categories
        .filter((item) => item === title)
        .map((c) => (c = 1))
        .reduce((a, b) => a + b, 0)
    )
    .reduce((a, b) => a + b, 0);

  return (
    <a className="section-btn" href="eat-out-next-page">
      <div className="section-btn_item">
        <h2 className="section-btn_title">
          {title === "Breakfast" ? "Brunch" : title}
        </h2>
        <span className="section-btn_text">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            <div>
              {title === "Soups" ? sum + 1 : sum} {sum > 1 ? "places" : "place"}
            </div>
          )}
        </span>
      </div>
      <figure>
        <img className="section-btn_img" src={image} alt={altText} />
      </figure>
    </a>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  number: PropTypes.string,
  image: PropTypes.string,
  altText: PropTypes.string,
};

export default Category;
