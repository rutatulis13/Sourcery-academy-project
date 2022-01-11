import { useState, useEffect } from "react";

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState({
    lat: "",
    lng: "",
  });

  const onSuccess = (location) => {
    setUserLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const onError = (error) => {
    setUserLocation({
      lat: "",
      lng: "",
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
