import React, { useState, useEffect, createContext } from "react";
import { Outlet } from "react-router";

const RestaurantsContext = createContext();

const RestaurantsProvider = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contextData, setContextData] = useState({
    restaurantsData,
    setRestaurantsData,
    loading,
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
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setContextData({
      restaurantsData,
      setRestaurantsData,
      loading,
    });
  }, [restaurantsData, loading]);

  return (
    <RestaurantsContext.Provider value={contextData}>
      <Outlet />
    </RestaurantsContext.Provider>
  );
};

export { RestaurantsProvider, RestaurantsContext };
