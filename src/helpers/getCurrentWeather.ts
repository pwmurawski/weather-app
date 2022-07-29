import { ICurrentWeather } from "../interfaces/ICurrentWeather";
import apiOpenWeatherMap from "./api/apiOpenWeatherMap";

const getCurrentWeather = async (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
) => {
  const res = await apiOpenWeatherMap<ICurrentWeather>(
    `weather?lang=pl&units=metric&q=${searchValue}&lat=${lat}&lon=${lng}`
  );
  return res;
};

export default getCurrentWeather;
