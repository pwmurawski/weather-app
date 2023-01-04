import { IForecastWeather } from "../../../interfaces/ForecastWeatherType";
import ForecastWeatherInfo from "../ForecastWeatherInfo";

interface IForecastWeatherInfoProps {
  forecastWeatherData: IForecastWeather | undefined;
}

export default function ForecastWeatherInfoMap({
  forecastWeatherData,
}: IForecastWeatherInfoProps) {
  if (!forecastWeatherData) return null;
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
