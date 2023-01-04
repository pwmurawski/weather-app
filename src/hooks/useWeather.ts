/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useWeather = <DataType extends { cod: string | number }>(
  fetcher: (
    searchValue: string,
    lat: number | undefined,
    lng: number | undefined
  ) => Promise<DataType | undefined>,
  searchValue: string,
  lat: number | undefined,
  lng: number | undefined
): [weather: typeof weather, isLoading: boolean] => {
  const [weather, setWeather] = useState<DataType>();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);

    const res = await fetcher(searchValue, lat, lng);
    if (res) {
      if (!/4+[0-9]{2}/.test(res.cod.toString())) {
        setWeather(res);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if ((lat && lng) || searchValue) {
      getData();
    }
  }, [lat, lng, searchValue]);

  return [weather, isLoading];
};

export default useWeather;
