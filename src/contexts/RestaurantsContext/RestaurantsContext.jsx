import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router";
import { transformRestaurantCategories } from "utils/restaurants.js";

const RestaurantsContext = createContext();

const RestaurantsProvider = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [contextData, setContextData] = useState({
    restaurantsData,
    setRestaurantsData,
    categoriesData,
    loadingRestaurants,
    loadingCategories,
  });

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((data) => {
        setRestaurantsData(data.restaurants);
      })
      .finally(() => {
        setLoadingRestaurants(false);
      });
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/categories.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((data) => {
        setCategoriesData(transformRestaurantCategories(data.categories));
      })
      .finally(() => {
        setLoadingCategories(false);
      });
  }, []);

  useEffect(() => {
    setContextData({
      restaurantsData,
      categoriesData,
      setRestaurantsData,
      loadingRestaurants,
      loadingCategories,
    });
  }, [restaurantsData, categoriesData, loadingRestaurants, loadingCategories]);

  return (
    <RestaurantsContext.Provider value={contextData}>
      <Outlet />
    </RestaurantsContext.Provider>
  );
};

export { RestaurantsProvider, RestaurantsContext };
