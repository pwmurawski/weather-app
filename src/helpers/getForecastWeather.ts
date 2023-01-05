import { ForecastWeatherSchema } from "../types/ForecastWeatherTypes";
import apiOpenWeatherMap from "./api/apiOpenWeatherMap";

const getForecastWeather = async (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
) => {
  const res = await apiOpenWeatherMap(
    `forecast?lang=pl&units=metric&q=${searchValue}&lat=${lat}&lon=${lng}`
  );
  return ForecastWeatherSchema.parse(res);
};

export default getForecastWeather;
