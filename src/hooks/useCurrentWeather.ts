import { useEffect, useState } from "react";
import getCurrentWeather from "../helpers/getCurrentWeather";
import { ICurrentWeather } from "../interfaces/ICurrentWeather";

const useCurrentWeather = (
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
): [
  currentWeather: ICurrentWeather | undefined,
  setCurrentWeather: React.Dispatch<
    React.SetStateAction<ICurrentWeather | undefined>
  >,
  isLoading: boolean
] => {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const res = await getCurrentWeather(searchValue, lat, lng);
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setCurrentWeather(res);
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

  return [currentWeather, setCurrentWeather, isLoading];
};

export default useCurrentWeather;
