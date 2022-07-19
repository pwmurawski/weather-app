import timeConverter from "../../helpers/timeConverter";
import { ICurrentWeather } from "../../interfaces/ICurrentWeather";

interface ICurrentWeatherInfoProps {
  currentWeather: ICurrentWeather | undefined;
}

export default function CurrentWeatherInfo({
  currentWeather,
}: ICurrentWeatherInfoProps) {
  if (!currentWeather) return null;
  return (
    <>
      <h2>{currentWeather.name}</h2>
      <div>
        {currentWeather
          ? `${Math.round(currentWeather.main.temp)}°C`
          : undefined}
      </div>
      <div>{currentWeather.weather[0].description}</div>
      <div>{currentWeather.weather[0].icon}</div>
      <div>{timeConverter(currentWeather.dt, currentWeather.timezone)}</div>
      <div>
        {timeConverter(currentWeather.sys.sunrise, currentWeather.timezone)}
      </div>
      <div>
        {timeConverter(currentWeather.sys.sunset, currentWeather.timezone)}
      </div>
    </>
  );
}
