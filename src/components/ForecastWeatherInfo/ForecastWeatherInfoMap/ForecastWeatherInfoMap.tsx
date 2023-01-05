import { ForecastWeatherType } from "../../../types/ForecastWeatherTypes";
import ForecastWeatherInfo from "../ForecastWeatherInfo";

interface IForecastWeatherInfoProps {
  forecastWeatherData: ForecastWeatherType | undefined;
}

export default function ForecastWeatherInfoMap({
  forecastWeatherData,
}: IForecastWeatherInfoProps) {
  if (!forecastWeatherData?.list) return null;
  return (
    <>
      {forecastWeatherData.list.map((forecastWeather) => (
        <ForecastWeatherInfo
          key={forecastWeather.dt}
          forecastWeather={forecastWeather}
          city={forecastWeatherData.city}
        />
      ))}
    </>
  );
}
