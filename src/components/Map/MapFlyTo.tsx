/* eslint-disable no-unused-vars */
import { LatLngExpression } from "leaflet";
import { useMap } from "react-leaflet";

interface IUseMapProps {
  position: LatLngExpression;
}

export function MapFlyTo({ position }: IUseMapProps) {
  const map = useMap();
  map.flyTo(position, 10);

  return null;
}
