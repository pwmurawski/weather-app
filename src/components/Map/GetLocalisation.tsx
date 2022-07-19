/* eslint-disable no-unused-vars */
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { homeIcon } from "./MarkerIcon/MarkerIcon";

interface IGetLocalisationProps {
  getPosition?: (position: LatLng) => void;
}

const defaultProps = {
  getPosition: null,
};

export default function GetLocalisation({
  getPosition,
}: IGetLocalisationProps) {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      if (getPosition) getPosition(e.latlng);
      map.flyTo(e.latlng, 10);
    },
  });

  useEffect(() => {
    map.locate();
  }, []);

  if (position) return <Marker position={position} icon={homeIcon} />;
  return null;
}

GetLocalisation.defaultProps = defaultProps;
