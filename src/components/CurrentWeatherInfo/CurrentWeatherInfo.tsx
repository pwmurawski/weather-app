import dateTimeConverter from "../../helpers/dateTimeConverter";
import { ICurrentWeather } from "../../interfaces/ICurrentWeather";
import arrow from "../../assets/arrow-up.png";
import sunrise from "../../assets/sunrise.png";
import sunset from "../../assets/sunset.png";
import {
  Box,
  BoxContainer,
  CityName,
  ColumnBoxContainer,
  ColumnContainer,
  Container,
  CurrentTemperature,
  Description,
  Icon,
  Img,
  Label,
  RowContainer,
  SunriseSunset,
  Time,
  WindDirectionArrow,
} from "./styles/CurrentWeatherInfoStyles";

interface ICurrentWeatherInfoProps {
  currentWeather: ICurrentWeather | undefined;
}

export default function CurrentWeatherInfo({
  currentWeather,
}: ICurrentWeatherInfoProps) {
  if (!currentWeather) return null;
  return (
    <>
      <CityName data-testid="cityName">{currentWeather.name}</CityName>
      <Container data-testid="container">
        <Time data-testid="time">
          {dateTimeConverter(currentWeather.dt, currentWeather.timezone)}
        </Time>
        <ColumnContainer data-testid="columnContainer">
          <Icon
            data-testid="icon"
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          />
          <CurrentTemperature data-testid="currentTemperature">
            {Math.round(currentWeather.main.temp)}°C
          </CurrentTemperature>
        </ColumnContainer>
        <ColumnContainer data-testid="columnContainer">
          <RowContainer data-testid="rowContainer">
            <Description data-testid="description">
              {currentWeather.weather[0].description}
            </Description>
          </RowContainer>
          <ColumnBoxContainer data-testid="columnBoxContainer">
            <BoxContainer data-testid="boxContainer">
              <Box data-testid="box">
                <Label data-testid="label">odczuwalna</Label>
                {Math.round(currentWeather.main.feels_like)}°C
              </Box>
              <Box data-testid="box">
                <Label data-testid="label">ciśnienie</Label>
                {currentWeather.main.pressure} hPa
              </Box>
            </BoxContainer>
            <BoxContainer data-testid="boxContainer">
              <Box data-testid="box">
                <Label data-testid="label">wiatr</Label>
                {Math.round(currentWeather.wind.speed)} km/h
              </Box>
              <Box data-testid="box">
                <Label data-testid="label">kierunek</Label>
                <WindDirectionArrow
                  data-testid="windDirectionArrow"
                  src={arrow}
                  deg={currentWeather.wind.deg}
                />
              </Box>
            </BoxContainer>
            <BoxContainer data-testid="boxContainer">
              <SunriseSunset data-testid="sunriseSunset">
                <Img data-testid="img" width="30px" src={sunrise} />
                {dateTimeConverter(
                  currentWeather.sys.sunrise,
                  currentWeather.timezone,
                  "time"
                )}
              </SunriseSunset>
              <SunriseSunset data-testid="sunriseSunset">
                <Img data-testid="img" width="30px" src={sunset} />
                {dateTimeConverter(
                  currentWeather.sys.sunset,
                  currentWeather.timezone,
                  "time"
                )}
              </SunriseSunset>
            </BoxContainer>
          </ColumnBoxContainer>
        </ColumnContainer>
      </Container>
    </>
  );
}
