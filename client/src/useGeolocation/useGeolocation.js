import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinated: { lat: "", lng: "" },
  });
  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };
  const onError = (error) => {
    setLocation({ loaded: true, error });
  };
  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
      // setLocation((state) => ({
      //   ...state,
      //   loaded: true,
      //   error: {
      //     code: 0,
      //     message: "Geolocation not availabe",
      //   },
      // }));
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  console.log(location)
  return (
    <>
    {location.coords.latitude && location.coords.longitude ?
    <img src={``}   />}
      :null

    </>
  );
};
