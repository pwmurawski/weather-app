import { IWeatherData } from "../../interfaces/IWeatherData";
import { Container } from "./styles/WeatherInfoStyles";

interface ISidePanelProps {
  weatherData: IWeatherData | undefined;
}

export default function WeatherInfo({ weatherData }: ISidePanelProps) {
  if (!weatherData) return null;
  return (
    <Container>
      <h2>{weatherData.name}</h2>
      <div>
        {weatherData ? `${Math.round(weatherData.main.temp)}°C` : undefined}
      </div>
      <div>{weatherData.weather[0].description}</div>
      <div>{weatherData.weather[0].icon}</div>
    </Container>
  );
}
