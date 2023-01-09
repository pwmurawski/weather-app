import { render } from "@testing-library/react";
import { dateTimeConverter } from "../../../helpers/dateTimeConverter";
import { ForecastWeatherInfo } from "../ForecastWeatherInfo";

const forecastWeather = {
  dt: 1672509600,
  main: {
    temp: 12.15,
    feels_like: 11.51,
    temp_min: 11.61,
    temp_max: 12.15,
    pressure: 1011,
    sea_level: 1011,
    grnd_level: 1000,
    humidity: 80,
    temp_kf: 0.54,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "zachmurzenie umiarkowane",
      icon: "04n",
    },
  ],
  clouds: {
    all: 83,
  },
  wind: {
    speed: 7.07,
    deg: 232,
    gust: 17.69,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: "n",
  },
  dt_txt: "2022-12-31 18:00:00",
};

const city = {
  id: 756135,
  name: "Warszawa",
  coord: {
    lat: 52.2318,
    lon: 21.0062,
  },
  country: "PL",
  population: 1000000,
  timezone: 3600,
  sunrise: 1672469122,
  sunset: 1672497122,
};

describe("ForecastWeatherInfo component", () => {
  it("render containerForecastWeatherInfo", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const containerForecastWeatherInfo = getByTestId(
      "containerForecastWeatherInfo"
    );

    expect(containerForecastWeatherInfo).toBeInTheDocument();
  });

  it("whether the containerForecastWeatherInfo has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const containerForecastWeatherInfo = getByTestId(
      "containerForecastWeatherInfo"
    );

    expect(containerForecastWeatherInfo).toHaveStyle({
      boxSizing: "border-box",
      position: "relative",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
      fontWeight: "600",
      fontSize: "13px",
      paddingTop: "15px",
      paddingBottom: "10px",
      zIndex: "-1",
    });
  });

  it("render date", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const date = getByTestId("date");

    expect(date).toBeInTheDocument();
    expect(date.textContent).toBe(
      dateTimeConverter(forecastWeather.dt, city.timezone, "date")
    );
  });

  it("whether the date has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const date = getByTestId("date");

    expect(date).toHaveStyle({
      position: "absolute",
      top: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: "rgb(64, 109, 161)",
      color: "white",
      borderRadius: "20px",
    });
  });

  it("render time", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const time = getByTestId("time");

    expect(time).toBeInTheDocument();
    expect(time.textContent).toBe(
      dateTimeConverter(forecastWeather.dt, city.timezone, "time")
    );
  });

  it("whether the time has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const time = getByTestId("time");

    expect(time).toHaveStyle({
      fontSize: "14px",
      margin: "5px",
    });
  });

  it("render rowContainer", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const rowContainer = getByTestId("rowContainer");

    expect(rowContainer).toBeInTheDocument();
  });

  it("whether the rowContainer has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const rowContainer = getByTestId("rowContainer");

    expect(rowContainer).toHaveStyle({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    });
  });

  it("render columnContainer", () => {
    const { getAllByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const columnContainers = getAllByTestId("columnContainer");

    columnContainers.forEach((columnContainer) => {
      expect(columnContainer).toBeInTheDocument();
    });
  });

  it("whether the columnContainer has appropriate styles", () => {
    const { getAllByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const columnContainers = getAllByTestId("columnContainer");

    columnContainers.forEach((columnContainer) => {
      expect(columnContainer).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      });
    });
  });

  it("render currentTemp", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const currentTemp = getByTestId("currentTemp");

    expect(currentTemp).toBeInTheDocument();
    expect(currentTemp.textContent).toBe(
      `${Math.round(forecastWeather.main.temp)}°C`
    );
  });

  it("whether the currentTemp has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const currentTemp = getByTestId("currentTemp");

    expect(currentTemp).toHaveStyle({
      fontSize: "25px",
      margin: "5px",
    });
  });

  it("render windSpeed", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const windSpeed = getByTestId("windSpeed");

    expect(windSpeed).toBeInTheDocument();
    expect(windSpeed.textContent).toBe(
      `wiatr${Math.round(forecastWeather.wind.speed)}km/h`
    );
  });

  it("whether the windSpeed has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const windSpeed = getByTestId("windSpeed");

    expect(windSpeed).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    });
  });

  it("render label", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const label = getByTestId("label");

    expect(label).toBeInTheDocument();
    expect(label.textContent).toBe("wiatr");
  });

  it("whether the label has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const label = getByTestId("label");

    expect(label).toHaveStyle({
      textTransform: "uppercase",
      fontSize: "11px",
    });
  });

  it("render icon", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("src")).toBe(
      "https://openweathermap.org/img/wn/04n@2x.png"
    );
  });

  it("whether the icon has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      maxWidth: "80px",
      height: "auto",
    });
  });

  it("render description", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const description = getByTestId("description");

    expect(description).toBeInTheDocument();
    expect(description.textContent).toBe(
      forecastWeather.weather[0].description
    );
  });

  it("whether the description has appropriate styles", () => {
    const { getByTestId } = render(
      <ForecastWeatherInfo forecastWeather={forecastWeather} city={city} />
    );
    const description = getByTestId("description");

    expect(description).toHaveStyle({
      textTransform: "capitalize",
    });
  });
});
