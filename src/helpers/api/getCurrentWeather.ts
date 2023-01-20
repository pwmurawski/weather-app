import { CurrentWeatherSchema } from "../../types/CurrentWeatherTypes";
import { apiOpenWeatherMap } from "./apiOpenWeatherMap";

export const getCurrentWeather = async (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
) => {
  const res = await apiOpenWeatherMap(
    `weather?lang=pl&units=metric&q=${searchValue}&lat=${lat}&lon=${lng}`
  );
  return CurrentWeatherSchema.parse(res);
};
