import React from "react";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import "./EatOutSection.scss";

const EatOutSection = () => {
  return (
    <Grid breakpointCols={[1, 1, 3, 3]}>
      <div className="browse-card">
        <h2 className="browse-card__text">
          View all your favourite lunch spots and more
        </h2>
        <div className="browse-card__button">Browse list</div>
      </div>
      <RestaurantCard />
      <RestaurantCard />
    </Grid>
  );
};

export default EatOutSection;
