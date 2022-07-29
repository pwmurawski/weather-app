import { useEffect, useState } from "react";
import getForecastWeather from "../helpers/getForecastWeather";
import { IForecastWeather } from "../interfaces/IForecastWeather";

const useForecastWeather = (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
): [
  forecastWeather: IForecastWeather | undefined,
  setForecastWeather: React.Dispatch<
    React.SetStateAction<IForecastWeather | undefined>
  >,
  isLoading: boolean
] => {
  const [forecastWeather, setForecastWeather] = useState<IForecastWeather>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getForecastWeather(searchValue, lat, lng);
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setForecastWeather(res);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if ((lat && lng) || searchValue) {
      setIsLoading(true);
      getData();
    }
  }, [lat, lng, searchValue]);

  return [forecastWeather, setForecastWeather, isLoading];
};

export default useForecastWeather;
