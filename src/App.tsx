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
import fetchOpenWeatherMap from "./helpers/fetchOpenWeatherMap";
import { ICurrentWeather } from "./interfaces/ICurrentWeather";
import yourLocationIcon from "./assets/location.png";
import { IForecastWeather } from "./interfaces/IForecastWeather";
import InfoBox from "./components/InfoBox/InfoBox";
import CurrentWeatherInfo from "./components/CurrentWeatherInfo/CurrentWeatherInfo";
import ForecastWeatherInfo from "./components/ForecastWeatherInfo/ForecastWeatherInfo";
import currentWeatherIcon from "./assets/weather-app.png";
import forecastWeatherIcon from "./assets/weather-forecast.png";
import photoIcon from "./assets/image.png";
import { IPhotosData } from "./interfaces/IPhotosData";
import Slider from "./components/Slider/Slider";

export default function App() {
  const [positionLocalisation, setPositionLocalisation] = useState<LatLng>();
  const [positionMouseClick, setPositionMouseClick] = useState<LatLng>();
  const [searchValue, setSearchValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [forecastWeather, setForecastWeather] = useState<IForecastWeather>();
  const [flyTo, setFlyTo] = useState<LatLngExpression | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);

  const getCurrentWeather = async () => {
    const res = await fetchOpenWeatherMap<ICurrentWeather>(
      `weather?lang=pl&units=metric&q=${searchValue}&lat=${positionMouseClick?.lat}&lon=${positionMouseClick?.lng}`
    );
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setFlyTo([res.coord.lat, res.coord.lon]);
        setCurrentWeather(res);
      }
    }
  };

  const getForecastWeather = async () => {
    const res = await fetchOpenWeatherMap<IForecastWeather>(
      `forecast?lang=pl&units=metric&q=${searchValue}&lat=${positionMouseClick?.lat}&lon=${positionMouseClick?.lng}`
    );
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setForecastWeather(res);
      }
    }
  };

  const getPhoto = async () => {
    const request = await fetch(
      `https://api.pexels.com/v1/search?query=${currentWeather?.name.toLocaleLowerCase()}`
    );
    const res: IPhotosData = await request.json();
    if (!res.error) {
      const photosData = res.photos.map(({ src }) => src.medium);
      setPhotos(photosData);
    }
  };

  useEffect(() => {
    if (positionMouseClick || searchValue) {
      getCurrentWeather();
      getForecastWeather();
    }
  }, [positionMouseClick, searchValue]);

  useEffect(() => {
    if (searchValue) setSearchValue("");
  }, [positionMouseClick]);

  useEffect(() => {
    if (currentWeather?.name) getPhoto();
  }, [currentWeather?.name]);

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
