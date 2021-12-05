import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Category.scss";
import Grid from "components/Grid/Grid";

const Category = ({ image, altText, name }) => {
  const [dataRestaurants, setDataRestaurants] = useState([]);
  const [dataCategories, setDataCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/categories.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((dataCategories) => {
        setDataCategories(dataCategories.categories);
      })
      .finally(() => {
        setIsLoading(false);
      });

    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((dataRestaurants) => {
        setDataRestaurants(dataRestaurants.restaurants);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // const names = dataCategories.map(myFunc);
  // function myFunc() {
  //   if (name === "Donuts") {
  //     name = "Sweets";
  //   } else if (name === "Hot dogs") {
  //     name = "Sandwich";
  //   }
  // }
  // console.log(names);

  return (
    <section className="section-container">
      <h2 className="section-container_title">Categories</h2>
      <Grid breakpointCols={[1, 2, 3, 4]}>
        {dataCategories.map((name) => (
          <a key={name} className="section-btn" href="eat-out-next-page">
            <div className="section-btn_item">
              <h2 className="section-btn_title">
                {name === "Breakfast" ? "Brunch" : name}
                <span className="section-btn_text">
                  {isLoading ? (
                    <div>Loading</div>
                  ) : (
                    <div>
                      {dataRestaurants
                        .map(
                          (item) =>
                            item.categories.filter(
                              (item) =>
                                item ===
                                (name === "Brunch" ? "Breakfast" : name)
                            ).length
                        )
                        .reduce((a, b) => a + b, 0) +
                        " " +
                        "places"}
                      {/* {sum > 1 ? "places" : "place"} */}
                    </div>
                  )}
                </span>
              </h2>
            </div>

            <figure>
              <img className="section-btn_img" src={image} alt={altText} />
            </figure>
          </a>
        ))}
      </Grid>
    </section>
  );
};

Category.propTypes = {
  image: PropTypes.string,
  altText: PropTypes.string,
  name: PropTypes.string,
};

export default Category;
