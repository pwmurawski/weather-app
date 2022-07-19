import timeConverter from "../../helpers/timeConverter";
import { ICurrentWeather } from "../../interfaces/IWeatherData";
import { Container } from "./styles/WeatherInfoStyles";

interface ISidePanelProps {
  currentWeather: ICurrentWeather | undefined;
}

export default function WeatherInfo({ currentWeather }: ISidePanelProps) {
  if (!currentWeather) return null;
  return (
    <Container>
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
    </Container>
  );
}
