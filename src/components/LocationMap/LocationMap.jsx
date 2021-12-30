import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker } from "@monsonjeremy/react-leaflet";
import "./LocationMap.scss";

import { icon as leafletIcon } from "leaflet";

const LocationMap = ({ coordinates }) => {
  const markerIcon = leafletIcon({
    iconUrl: require("assets/location.svg"),
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    className: "location-map-marker-icon",
  });

  return (
    <MapContainer
      className="location-map-container"
      center={[coordinates[0], coordinates[1]]}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        className="location-map-tile-layer"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[coordinates[0], coordinates[1]]}
        icon={markerIcon}
      ></Marker>
    </MapContainer>
  );
};

LocationMap.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default LocationMap;
