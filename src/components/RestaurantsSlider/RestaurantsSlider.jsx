import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "components/Grid/Grid";
import RestaurantCard from "components/RestaurantCard/RestaurantCard";
import { useWidth } from "utils/hooks/useWidth";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import "./RestaurantsSlider.scss";

const RestaurantsSlider = ({ title, restaurants }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const viewportWidth = useWidth();
  const cardsPerPage = viewportWidth > 768 ? 3 : 1;
  const isFirstPage = currentCard === 0;
  const isLastPage = currentCard === restaurants.length - cardsPerPage;

  const handlePrev = () => {
    if (!isFirstPage) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      setCurrentCard(currentCard + 1);
    }
  };

  return (
    <div className="restaurants-slider">
      <div className="restaurants-slider__header">
        <h2 className="restaurants-slider__title">{title}</h2>
        <div className="restaurants-slider__buttons">
          <button onClick={handlePrev} disabled={isFirstPage}>
            <ArrowLeft className="restaurants-slider__buttons__arrow" />
          </button>
          <button onClick={handleNext} disabled={isLastPage}>
            <ArrowRight className="restaurants-slider__buttons__arrow" />
          </button>
        </div>
      </div>
      <Grid breakpointCols={[1, 1, 3, 3, 3]}>
        {restaurants
          .slice(0 + currentCard, cardsPerPage + currentCard)
          .map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} large />
          ))}
      </Grid>
    </div>
  );
};

RestaurantsSlider.propTypes = {
  title: PropTypes.string.isRequired,
  restaurants: PropTypes.array.isRequired,
};

export default RestaurantsSlider;
