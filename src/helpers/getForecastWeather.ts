import { IForecastWeather } from "../interfaces/ForecastWeatherType";
import apiOpenWeatherMap from "./api/apiOpenWeatherMap";

const getForecastWeather = async (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
) => {
  const res = await apiOpenWeatherMap<IForecastWeather>(
    `forecast?lang=pl&units=metric&q=${searchValue}&lat=${lat}&lon=${lng}`
  );
  return res;
};

export default getForecastWeather;
