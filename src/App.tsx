import { LatLng, LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { GoToLocalisation, Img, SidePanel } from "./AppStyles";
import GetLocalisation from "./components/Map/GetLocalisation";
import GetMouseClickPosition from "./components/Map/GetMouseClickPosition";
import Map from "./components/Map/Map";
import MapFlyTo from "./components/Map/MapFlyTo";
import { markerIcon } from "./components/Map/MarkerIcon/MarkerIcon";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import fetchApi from "./helpers/fetchApi";
import { ICurrentWeather } from "./interfaces/IWeatherData";
import yourLocationIcon from "./assets/location.png";

export default function App() {
  const [positionLocalisation, setPositionLocalisation] = useState<LatLng>();
  const [positionMouseClick, setPositionMouseClick] = useState<LatLng>();
  const [searchValue, setSearchValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [flyTo, setFlyTo] = useState<LatLngExpression | null>(null);

  const getCurrentWeather = async () => {
    const res = await fetchApi<ICurrentWeather>(
      `&q=${searchValue}&lat=${positionMouseClick?.lat}&lon=${positionMouseClick?.lng}`
    );
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setFlyTo([res.coord.lat, res.coord.lon]);
        setCurrentWeather(res);
      }
    }
  };

  useEffect(() => {
    if (positionMouseClick || searchValue) getCurrentWeather();
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
        {positionLocalisation ? (
          <GoToLocalisation
            onClick={() => {
              setSearchValue("");
              setPositionMouseClick(positionLocalisation);
            }}
            type="button"
          >
            <Img src={yourLocationIcon} />
          </GoToLocalisation>
        ) : null}
        <WeatherInfo currentWeather={currentWeather} />
      </SidePanel>
      <Map position={[52.2312505202823, 21.00710032392898]} zoom={3}>
        <>
          <GetLocalisation
            getPosition={(position) => setPositionLocalisation(position)}
          />
          <GetMouseClickPosition
            mouseClickPosition={(position) => setPositionMouseClick(position)}
          />
          {flyTo ? <MapFlyTo position={flyTo} /> : null}
          {currentWeather ? (
            <Marker
              position={[currentWeather.coord.lat, currentWeather.coord.lon]}
              icon={markerIcon}
            >
              <Popup>
                {currentWeather.coord.lat}N, {currentWeather.coord.lon}E
              </Popup>
            </Marker>
          ) : null}
        </>
      </Map>
    </>
  );
}
