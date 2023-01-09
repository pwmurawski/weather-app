import { LatLng, LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { SidePanel } from "./AppStyles";
import { GetLocalisation } from "./components/Map/GetLocalisation";
import { GetMouseClickPosition } from "./components/Map/GetMouseClickPosition";
import { Map } from "./components/Map/Map";
import { MapFlyTo } from "./components/Map/MapFlyTo";
import { markerIcon } from "./components/Map/MapMarkers/MapMarkers";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { InfoBox } from "./components/InfoBox/InfoBox";
import { CurrentWeatherInfo } from "./components/CurrentWeatherInfo/CurrentWeatherInfo";
import currentWeatherIcon from "./assets/weather-app.png";
import forecastWeatherIcon from "./assets/weather-forecast.png";
import { GoToLocalisationBtn } from "./components/GoToLocalisationBtn/GoToLocalisationBtn";
import { useWeather } from "./hooks/useWeather";
import { getForecastWeather } from "./helpers/getForecastWeather";
import { getCurrentWeather } from "./helpers/getCurrentWeather";
import { ForecastWeatherInfoMap } from "./components/ForecastWeatherInfo/ForecastWeatherInfoMap/ForecastWeatherInfoMap";

export function App() {
  const [positionLocalisation, setPositionLocalisation] = useState<LatLng>();
  const [positionMouseClick, setPositionMouseClick] = useState<LatLng>();
  const [flyTo, setFlyTo] = useState<LatLngExpression | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [currentWeather] = useWeather(
    getCurrentWeather,
    searchValue,
    positionMouseClick?.lat,
    positionMouseClick?.lng
  );
  const [forecastWeather] = useWeather(
    getForecastWeather,
    searchValue,
    positionMouseClick?.lat,
    positionMouseClick?.lng
  );

  useEffect(() => {
    if (currentWeather?.coord)
      setFlyTo([currentWeather.coord.lat, currentWeather.coord.lon]);
  }, [currentWeather?.coord]);

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
        <GoToLocalisationBtn
          positionLocalisation={positionLocalisation}
          setPositionMouseClick={setPositionMouseClick}
          setSearchValue={setSearchValue}
        />
        <InfoBox isData={!!currentWeather} icon={currentWeatherIcon}>
          <CurrentWeatherInfo currentWeather={currentWeather} />
        </InfoBox>
        <InfoBox isData={!!forecastWeather} icon={forecastWeatherIcon}>
          <ForecastWeatherInfoMap forecastWeatherData={forecastWeather} />
        </InfoBox>
      </SidePanel>
      <Map position={[52.2312505202823, 21.00710032392898]} zoom={3}>
        <GetLocalisation
          getPosition={(position) => setPositionLocalisation(position)}
        />
        <GetMouseClickPosition
          mouseClickPosition={(position) => setPositionMouseClick(position)}
        />
        {flyTo ? <MapFlyTo position={flyTo} /> : null}
        {currentWeather?.coord ? (
          <Marker
            position={[currentWeather.coord.lat, currentWeather.coord.lon]}
            icon={markerIcon}
          >
            <Popup>
              {currentWeather.coord.lat}N, {currentWeather.coord.lon}E
            </Popup>
          </Marker>
        ) : null}
      </Map>
    </>
  );
}
