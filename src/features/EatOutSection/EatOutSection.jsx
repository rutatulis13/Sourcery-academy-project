import React, { useEffect, useState } from "react";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import "./EatOutSection.scss";
import { getRestaurantAverageRating } from "utils/restaurants";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";

const EatOutSection = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result?.restaurants) {
            setRestaurants(getSortedRestaurantsByRating(result.restaurants));
          }
        },
        (err) => {
          setError(err);
        }
      );
  }, []);

  const getSortedRestaurantsByRating = (restaurantsArray) => {
    const sortedArray = [...restaurantsArray].sort((a, b) => {
      return getRestaurantAverageRating(b) - getRestaurantAverageRating(a);
    });
    return sortedArray;
  };

  if (error) {
    return null;
  }

  return (
    <div className="eat-out-section">
      <Grid breakpointCols={[1, 1, 3, 3, 3]}>
        <div className="browse-card">
          <h2 className="browse-card__text">
            View all your favourite lunch spots and more
          </h2>
          {/* <div className="browse-card__button">Browse list</div> */}
          <Link to="/eat-out">
            <Button type="button">
              <span className="browse-card__button-text">Browse list</span>
            </Button>
          </Link>
        </div>
        {restaurants.slice(0, 2).map((restaurant, index) => (
          <RestaurantCard
            key={`${index}_${restaurant.id}`}
            restaurant={restaurant}
          />
        ))}
      </Grid>
    </div>
  );
};

export default EatOutSection;
