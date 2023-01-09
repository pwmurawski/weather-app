/* eslint-disable no-unused-vars */
import { LatLng } from "leaflet";
import { useMapEvents } from "react-leaflet";

interface IGetMouseClickPositionProps {
  mouseClickPosition: (position: LatLng) => void;
}

export function GetMouseClickPosition({
  mouseClickPosition,
}: IGetMouseClickPositionProps) {
  useMapEvents({
    click(mouseEvent) {
      mouseClickPosition(mouseEvent.latlng);
    },
  });

  return null;
}
