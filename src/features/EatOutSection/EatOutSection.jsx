import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sortRestaurantsByRating } from "utils/restaurants";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import "./EatOutSection.scss";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import Button from "components/Button/Button";

const EatOutSection = () => {
  const { restaurantsData } = useContext(RestaurantsContext);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    if (restaurants.length === 0) {
      setRestaurants(sortRestaurantsByRating(restaurantsData));
    }
  }, [restaurants, restaurantsData]);

  return (
    restaurants.length > 0 && (
      <div className="eat-out-section">
        <Grid breakpointCols={[1, 1, 3, 3, 3]}>
          <div className="browse-card">
            <h2 className="browse-card__text">
              View all your favourite lunch spots and more
            </h2>
            <Link to="/eat-out">
              <Button type="button" medium>
                Browse list
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
    )
  );
};

export default EatOutSection;
