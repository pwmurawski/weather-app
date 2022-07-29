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
import InfoBox from "./components/InfoBox/InfoBox";
import CurrentWeatherInfo from "./components/CurrentWeatherInfo/CurrentWeatherInfo";
import ForecastWeatherInfo from "./components/ForecastWeatherInfo/ForecastWeatherInfo";
import currentWeatherIcon from "./assets/weather-app.png";
import forecastWeatherIcon from "./assets/weather-forecast.png";
import photoIcon from "./assets/image.png";
import Slider from "./components/Slider/Slider";
import useCurrentWeather from "./hooks/useCurrentWeather";
import useForecastWeather from "./hooks/useForecastWeather";
import usePhotos from "./hooks/usePhotos";
import GoToLocalisationBtn from "./components/GoToLocalisationBtn/GoToLocalisationBtn";

export default function App() {
  const [positionLocalisation, setPositionLocalisation] = useState<LatLng>();
  const [positionMouseClick, setPositionMouseClick] = useState<LatLng>();
  const [flyTo, setFlyTo] = useState<LatLngExpression | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [currentWeather] = useCurrentWeather(
    searchValue,
    positionMouseClick?.lat,
    positionMouseClick?.lng
  );
  const [forecastWeather] = useForecastWeather(
    searchValue,
    positionMouseClick?.lat,
    positionMouseClick?.lng
  );
  const [photos] = usePhotos(searchValue);

  useEffect(() => {
    if (currentWeather)
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
          setPositionMouseClick={setPositionLocalisation}
          setSearchValue={setSearchValue}
        />
        <InfoBox isData={!!currentWeather} icon={currentWeatherIcon}>
          <CurrentWeatherInfo currentWeather={currentWeather} />
        </InfoBox>
        <InfoBox isData={!!forecastWeather} icon={forecastWeatherIcon}>
          <ForecastWeatherInfo forecastWeather={forecastWeather} />
        </InfoBox>
        <InfoBox isData={!!photos.length} icon={photoIcon}>
          <Slider imgArray={photos} />
        </InfoBox>
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
