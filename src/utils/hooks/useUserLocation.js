import { useState, useEffect } from "react";

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState({
    lat: null,
    lng: null,
  });

  const onSuccess = (location) => {
    setUserLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const onError = (error) => {
    setUserLocation({
      lat: null,
      lng: null,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      return;
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return userLocation;
};
