import React from "react";
import "./RestaurantCard.scss";
import { ReactComponent as PersonCheckIn } from "assets/person-check-in.svg";
import { ReactComponent as Ellipse } from "assets/ellipse.svg";
import { ReactComponent as Heart } from "assets/heart.svg";
import RestaurantRating from "components/RestaurantRating/RestaurantRating";

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card__top">
        <div className="restaurant-card__check-in">
          <PersonCheckIn />
          <div>6</div>
        </div>
        <RestaurantRating />
      </div>
      <div className="restaurant-card__bottom">
        <div className="restaurant-card__categories">
          Salads <Ellipse /> snacks <Ellipse /> pizza
        </div>
        <div className="restaurant-card__title">
          <span>Restorante Viva Piccola Italia</span>{" "}
          <Heart className="heart heart--filled" />
        </div>
        <div className="restaurant-card__time">10:00 - 21:00</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
