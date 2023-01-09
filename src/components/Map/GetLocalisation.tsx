/* eslint-disable no-unused-vars */
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { homeIcon } from "./MapMarkers/MapMarkers";

interface IGetLocalisationProps {
  getPosition?: (position: LatLng) => void;
}

export function GetLocalisation({ getPosition }: IGetLocalisationProps) {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    locationfound(location) {
      setPosition(location.latlng);
      if (getPosition) getPosition(location.latlng);
      map.flyTo(location.latlng, 10);
    },
  });

  useEffect(() => {
    map.locate();
  }, []);

  if (!position) return null;
  return <Marker position={position} icon={homeIcon} />;
}
