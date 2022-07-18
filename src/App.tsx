import { LatLng, LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { SidePanel } from "./AppStyles";
import GetLocalisation from "./components/Map/GetLocalisation";
import GetMouseClickPosition from "./components/Map/GetMouseClickPosition";
import Map from "./components/Map/Map";
import MapFlyTo from "./components/Map/MapFlyTo";
import { markerIcon } from "./components/Map/MarkerIcon/MarkerIcon";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import fetchApi from "./helpers/fetchApi";
import { IWeatherData } from "./interfaces/IWeatherData";

export default function App() {
  const [positionMouseClick, setPositionMouseClick] = useState<LatLng>();
  const [searchValue, setSearchValue] = useState("");
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const [flyTo, setFlyTo] = useState<LatLngExpression | null>(null);

  const getWeather = async () => {
    const res = await fetchApi<IWeatherData>(
      `&q=${searchValue}&lat=${positionMouseClick?.lat}&lon=${positionMouseClick?.lng}`
    );
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setFlyTo([res.coord.lat, res.coord.lon]);
        setWeatherData(res);
      }
    }
  };

  useEffect(() => {
    if (positionMouseClick || searchValue) getWeather();
  }, [positionMouseClick, searchValue]);

  useEffect(() => {
    if (searchValue) setSearchValue("");
  }, [positionMouseClick]);

  return (
    <>
      <SidePanel>
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <WeatherInfo weatherData={weatherData} />
      </SidePanel>
      <Map position={[52.2312505202823, 21.00710032392898]} zoom={3}>
        <>
          <GetLocalisation
            getPosition={(position) => setPositionMouseClick(position)}
          />
          <GetMouseClickPosition
            mouseClickPosition={(position) => setPositionMouseClick(position)}
          />
          {flyTo ? <MapFlyTo position={flyTo} /> : null}
          {weatherData ? (
            <Marker
              position={[weatherData.coord.lat, weatherData.coord.lon]}
              icon={markerIcon}
            >
              <Popup>
                {weatherData.coord.lat}N, {weatherData.coord.lon}E
              </Popup>
            </Marker>
          ) : null}
        </>
      </Map>
    </>
  );
}
