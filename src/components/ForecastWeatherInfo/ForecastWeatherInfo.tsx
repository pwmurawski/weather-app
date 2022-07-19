import timeConverter from "../../helpers/timeConverter";
import { IForecastWeather } from "../../interfaces/IForecastWeather";

interface IForecastWeatherInfoProps {
  forecastWeather: IForecastWeather | undefined;
}

export default function ForecastWeatherInfo({
  forecastWeather,
}: IForecastWeatherInfoProps) {
  if (!forecastWeather) return null;
  return (
    <>
      {forecastWeather.list.map((el) => (
        <div key={el.dt}>
          <div>{timeConverter(el.dt, forecastWeather.city.timezone)}</div>
          <div>{Math.round(el.main.temp)}</div>
        </div>
      ))}
    </>
  );
}
