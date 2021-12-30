import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import RestaurantRating from "components/RestaurantRating/RestaurantRating";
import "./EatOutRestaurantPage.scss";
import { useContext } from "react";
import { RestaurantsContext } from "contexts/RestaurantsContext/RestaurantsContext";
import { useState } from "react";
import LikeButton from "components/LikeButton/LikeButton";
import CheckInButton from "components/CheckInButton/CheckInButton";
import RestaurantInformationCard from "components/RestaurantInformationCard/RestaurantInformationCard";

const EatOutRestaurantPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { restaurantsData } = useContext(RestaurantsContext);
  const [restaurantIndex, setRestaurantIndex] = useState(-1);

  useEffect(() => {
    if (restaurantsData.length > 0 && params.restaurantId) {
      const _restaurantIndex = restaurantsData.findIndex(
        ({ id }) => id === params.restaurantId
      );
      if (_restaurantIndex > -1) {
        setRestaurantIndex(_restaurantIndex);
      } else {
        navigate("/404");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantsData, params]);

  const backgroundStyle = restaurantIndex > -1 && {
    background: `
      linear-gradient(
        90deg, 
        #F6F7F8 0%, 
        rgb(0, 0, 0, 0) 35%, 
        rgb(0, 0, 0, 0) 65%, 
        #F6F7F8 100%
      ),
      url('${restaurantsData[restaurantIndex].image}')
    `,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    restaurantIndex > -1 && (
      <>
        <div className="restaurant-page-banner">
          <div
            className="restaurant-page-banner__background"
            style={backgroundStyle}
          ></div>
          <div className="restaurant-page-banner__content">
            <div className="restaurant-page-banner__breadcrumbs-wrapper">
              <Breadcrumbs />
            </div>

            <div className="restaurant-page-banner__categories">
              {restaurantsData[restaurantIndex].categories.map((value) => (
                <div
                  key={value}
                  className="restaurant-page-banner__category-card"
                >
                  {value}
                </div>
              ))}
            </div>

            <h1 className="restaurant-page-banner__title">
              {restaurantsData[restaurantIndex].name}
            </h1>

            <div className="restaurant-actions-bar">
              <div className="restaurant-actions-bar__actions-group">
                <RestaurantRating restaurantId={params.restaurantId} />
                <LikeButton
                  itemDataAccessor="restaurants"
                  itemId={params.restaurantId}
                />
              </div>
              <div className="restaurant-actions-bar__check-in-info">
                {restaurantsData[restaurantIndex].checkIns > 0
                  ? `${restaurantsData[restaurantIndex].checkIns} ${
                      restaurantsData[restaurantIndex].checkIns === 1
                        ? "person"
                        : "people"
                    } already checked-in!`
                  : "No people have checked in yet."}
              </div>
              <div className="restaurant-actions-bar__actions-group">
                <span className="restaurant-actions-bar__invite">invite</span>
                <CheckInButton restaurantId={params.restaurantId} />
              </div>
            </div>
          </div>
        </div>

        <div className="restaurant-page-content">
          <div className="restaurant-page-outer-grid">
            <div className="restaurant-page-inner-grid">
              <section className="restaurant-information">
                <h2 className="restaurant-section-title">Information</h2>
                <RestaurantInformationCard
                  restaurant={restaurantsData[restaurantIndex]}
                />
              </section>

              <section className="restaurant-location">
                <h2 className="restaurant-section-title">Location</h2>
                <></>
              </section>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default EatOutRestaurantPage;
