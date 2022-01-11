import React, { useState, useContext } from "react";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import { useWidth } from "utils/hooks/useWidth";
import { useUserLocation } from "utils/hooks/useUserLocation";
import { calculateDistance } from "utils/calculateDistance";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import "./EatOutNearYou.scss";

const EatOutNearYou = () => {
  const { restaurantsData } = useContext(RestaurantsContext);
  const [page, setPage] = useState(0);
  const location = useUserLocation();
  const width = useWidth();
  const perPage = width > 768 ? 3 : 1;
  const isFirstPage = page === 0;
  const isLastPage = page === restaurantsData.length - perPage;

  const restaurantsByDistance = restaurantsData
    .map((restaurant) => {
      const lat1 = location.lat;
      const lng1 = location.lng;
      const lat2 = restaurant.location.coordinates.lat;
      const lng2 = restaurant.location.coordinates.lng;
      return {
        ...restaurant,
        distance: calculateDistance(lat1, lng1, lat2, lng2),
      };
    })
    .sort((a, b) => a.distance - b.distance);

  const handlePrev = () => {
    if (!isFirstPage) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="near-you">
      <div className="near-you__header">
        <h2 className="near-you__title">Discover near you</h2>
        <div className="near-you__buttons">
          <button onClick={handlePrev} disabled={isFirstPage}>
            <ArrowLeft className="near-you__buttons__arrow" />
          </button>
          <button onClick={handleNext} disabled={isLastPage}>
            <ArrowRight className="near-you__buttons__arrow" />
          </button>
        </div>
      </div>
      <Grid breakpointCols={[1, 1, 3, 3, 3]}>
        {restaurantsByDistance
          .slice(0 + page, perPage + page)
          .map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} large />
          ))}
      </Grid>
    </div>
  );
};

export default EatOutNearYou;
