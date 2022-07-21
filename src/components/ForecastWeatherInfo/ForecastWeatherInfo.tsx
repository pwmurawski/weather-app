import timeConverter from "../../helpers/timeConverter";
import { IForecastWeather } from "../../interfaces/IForecastWeather";
import {
  RowContainer,
  CurrentTemp,
  Description,
  Icon,
  Time,
  ColumnContainer,
  Container,
  Date,
} from "./styles/ForecastWeatherInfoStyles";

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
        <Container key={el.dt}>
          <Date>
            {timeConverter(el.dt, forecastWeather.city.timezone, "date")}
          </Date>
          <Time>
            {timeConverter(el.dt, forecastWeather.city.timezone, "time")}
          </Time>
          <RowContainer>
            <CurrentTemp>{Math.round(el.main.temp)}°C</CurrentTemp>
            <ColumnContainer>
              <Icon
                src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
              />
              <Description>{el.weather[0].description}</Description>
            </ColumnContainer>
          </RowContainer>
        </Container>
      ))}
    </>
  );
}
