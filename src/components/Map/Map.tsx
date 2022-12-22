import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { ReactNode } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletStyles } from "./styles/MapStyles";

interface IMapProps {
  children?: ReactNode;
  position: LatLngExpression;
  zoom: number;
}

const defaultProps = {
  children: undefined,
};

export default function Map({ position, zoom, children }: IMapProps) {
  return (
    <>
      <LeafletStyles />
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    </>
  );
}

Map.defaultProps = defaultProps;
