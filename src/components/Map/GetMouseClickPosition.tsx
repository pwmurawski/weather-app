/* eslint-disable no-unused-vars */
import { LatLng } from "leaflet";
import { useMapEvents } from "react-leaflet";

interface IGetMouseClickPositionProps {
  mouseClickPosition: (position: LatLng) => void;
}

export default function GetMouseClickPosition({
  mouseClickPosition,
}: IGetMouseClickPositionProps) {
  useMapEvents({
    click(e) {
      mouseClickPosition(e.latlng);
    },
  });

  return null;
}
