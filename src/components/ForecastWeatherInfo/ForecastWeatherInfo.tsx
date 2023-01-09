import { dateTimeConverter } from "../../helpers/dateTimeConverter";
import {
  ForecastWeatherCityType,
  ForecastWeatherListType,
} from "../../types/ForecastWeatherTypes";
import {
  RowContainer,
  CurrentTemp,
  Description,
  Icon,
  Time,
  ColumnContainer,
  Container,
  Date,
  WindSpeed,
  Label,
} from "./styles/ForecastWeatherInfoStyles";

interface IForecastWeatherInfoProps {
  forecastWeather: ForecastWeatherListType;
  city?: ForecastWeatherCityType;
}

export function ForecastWeatherInfo({
  forecastWeather,
  city,
}: IForecastWeatherInfoProps) {
  if (!city) return null;
  return (
    <Container data-testid="containerForecastWeatherInfo">
      <Date data-testid="date">
        {dateTimeConverter(forecastWeather.dt, city.timezone, "date")}
      </Date>
      <RowContainer data-testid="rowContainer">
        <Time data-testid="time">
          {dateTimeConverter(forecastWeather.dt, city.timezone, "time")}
        </Time>
        <ColumnContainer data-testid="columnContainer">
          <CurrentTemp data-testid="currentTemp">
            {Math.round(forecastWeather.main.temp)}°C
          </CurrentTemp>
          <WindSpeed data-testid="windSpeed">
            <Label data-testid="label">wiatr</Label>
            {Math.round(forecastWeather.wind.speed)}km/h
          </WindSpeed>
        </ColumnContainer>
        <ColumnContainer data-testid="columnContainer">
          <Icon
            data-testid="icon"
            src={`https://openweathermap.org/img/wn/${forecastWeather.weather[0].icon}@2x.png`}
            alt="weather"
          />
          <Description data-testid="description">
            {forecastWeather.weather[0].description}
          </Description>
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
}
