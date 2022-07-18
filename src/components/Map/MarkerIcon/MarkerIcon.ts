/* eslint-disable import/prefer-default-export */
import L from "leaflet";
import location from "../../../assets/location-pin.png";
import home from "../../../assets/home.png";

export const markerIcon = new L.Icon({
  iconUrl: location,
  iconSize: new L.Point(40, 40),
  className: "leafletIcon",
});

export const homeIcon = new L.Icon({
  iconUrl: home,
  iconSize: new L.Point(30, 30),
});
