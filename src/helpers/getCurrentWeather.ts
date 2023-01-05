import { CurrentWeatherSchema } from "../types/CurrentWeatherTypes";
import apiOpenWeatherMap from "./api/apiOpenWeatherMap";

const getCurrentWeather = async (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
) => {
  const res = await apiOpenWeatherMap(
    `weather?lang=pl&units=metric&q=${searchValue}&lat=${lat}&lon=${lng}`
  );
  return CurrentWeatherSchema.parse(res);
};

export default getCurrentWeather;
