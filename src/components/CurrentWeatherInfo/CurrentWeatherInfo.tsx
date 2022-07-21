import timeConverter from "../../helpers/timeConverter";
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
      <CityName>{currentWeather.name}</CityName>
      <Container>
        <Time>{timeConverter(currentWeather.dt, currentWeather.timezone)}</Time>
        <ColumnContainer>
          <Icon
            src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          />
          <CurrentTemperature>
            {Math.round(currentWeather.main.temp)}°C
          </CurrentTemperature>
        </ColumnContainer>
        <ColumnContainer>
          <RowContainer>
            <Description>{currentWeather.weather[0].description}</Description>
          </RowContainer>
          <ColumnBoxContainer>
            <BoxContainer>
              <Box>
                <Label>odczuwalna</Label>
                {Math.round(currentWeather.main.feels_like)}°C
              </Box>
              <Box>
                <Label>ciśnienie</Label>
                {currentWeather.main.pressure} hPa
              </Box>
            </BoxContainer>
            <BoxContainer>
              <Box>
                <Label>wiatr</Label>
                {Math.round(currentWeather.wind.speed)} km/h
              </Box>
              <Box>
                <Label>kierunek</Label>
                <WindDirectionArrow src={arrow} deg={currentWeather.wind.deg} />
              </Box>
            </BoxContainer>
            <BoxContainer>
              <SunriseSunset>
                <Img width="30px" src={sunrise} />
                {timeConverter(
                  currentWeather.sys.sunrise,
                  currentWeather.timezone,
                  "time"
                )}
              </SunriseSunset>
              <SunriseSunset>
                <Img width="30px" src={sunset} />
                {timeConverter(
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
