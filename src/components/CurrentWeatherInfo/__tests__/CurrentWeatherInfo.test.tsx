import { render } from "@testing-library/react";
import dateTimeConverter from "../../../helpers/dateTimeConverter";
import CurrentWeatherInfo from "../CurrentWeatherInfo";

const currentWeather = {
  coord: {
    lon: 21.0059,
    lat: 52.2379,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "bezchmurnie",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 5.11,
    feels_like: 3.44,
    temp_min: 3.7,
    temp_max: 6.58,
    pressure: 1016,
    humidity: 81,
  },
  visibility: 10000,
  wind: {
    speed: 2.06,
    deg: 200,
  },
  clouds: {
    all: 0,
  },
  dt: 1672419179,
  sys: {
    type: 2,
    id: 2032856,
    country: "PL",
    sunrise: 1672382725,
    sunset: 1672410663,
  },
  timezone: 3600,
  id: 756135,
  name: "Warszawa",
  cod: 200,
};

describe("CurrentWeatherInfo component", () => {
  it("render cityName", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const cityName = getByTestId("cityName");

    expect(cityName).toBeInTheDocument();
    expect(cityName.textContent).toBe(currentWeather.name);
  });

  it("whether the cityName has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const cityName = getByTestId("cityName");

    expect(cityName).toHaveStyle({
      alignSelf: "flex-start",
      margin: "15px 0",
    });
  });

  it("render container", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const container = getByTestId("container");

    expect(container).toBeInTheDocument();
  });

  it("whether the container has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const container = getByTestId("container");

    expect(container).toHaveStyle({
      boxSizing: "border-box",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "100%",
      borderRadius: "5px",
      padding: "10px",
      backgroundColor: "rgb(64, 109, 161)",
      color: "white",
      fontWeight: "600",
    });
  });

  it("render time", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const time = getByTestId("time");

    expect(time).toBeInTheDocument();
    expect(time.textContent).toBe(
      dateTimeConverter(currentWeather.dt, currentWeather.timezone)
    );
  });

  it("whether the time has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const time = getByTestId("time");

    expect(time).toHaveStyle({
      position: "absolute",
      top: "-15px",
      right: "0",
      fontSize: "12px",
      color: "black",
    });
  });

  it("render columnContainer", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const columnContainers = getAllByTestId("columnContainer");

    columnContainers.forEach((container) => {
      expect(container).toBeInTheDocument();
    });
  });

  it("whether the columnContainer has appropriate styles", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const columnContainers = getAllByTestId("columnContainer");

    columnContainers.forEach((container) => {
      expect(container).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      });
    });
  });

  it("render icon", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const icon = getByTestId("icon");

    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("src")).toBe(
      `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`
    );
  });

  it("whether the icon has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const icon = getByTestId("icon");

    expect(icon).toHaveStyle({
      maxWidth: "80px",
      height: "auto",
    });
  });

  it("render currentTemperature", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const currentTemperature = getByTestId("currentTemperature");

    expect(currentTemperature).toBeInTheDocument();
    expect(currentTemperature.textContent).toBe(
      `${Math.round(currentWeather.main.temp)}°C`
    );
  });

  it("whether the currentTemperature has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const currentTemperature = getByTestId("currentTemperature");

    expect(currentTemperature).toHaveStyle({
      fontSize: "30px",
      color: "gold",
      margin: "5px",
    });
  });

  it("render rowContainer", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const rowContainer = getByTestId("rowContainer");

    expect(rowContainer).toBeInTheDocument();
  });

  it("whether the rowContainer has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const rowContainer = getByTestId("rowContainer");

    expect(rowContainer).toHaveStyle({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    });
  });

  it("render description", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const description = getByTestId("description");

    expect(description).toBeInTheDocument();
    expect(description.textContent).toBe(currentWeather.weather[0].description);
  });

  it("whether the description has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const description = getByTestId("description");

    expect(description).toHaveStyle({
      textTransform: "capitalize",
      margin: "5px",
    });
  });

  it("render columnBoxContainer", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const columnBoxContainer = getByTestId("columnBoxContainer");

    expect(columnBoxContainer).toBeInTheDocument();
  });

  it("whether the columnBoxContainer has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const columnBoxContainer = getByTestId("columnBoxContainer");

    expect(columnBoxContainer).toHaveStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    });
  });

  it("render boxContainer", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const boxContainers = getAllByTestId("boxContainer");

    boxContainers.forEach((container) => {
      expect(container).toBeInTheDocument();
    });
  });

  it("whether the boxContainer has appropriate styles", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const boxContainers = getAllByTestId("boxContainer");

    boxContainers.forEach((container) => {
      expect(container).toHaveStyle({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
      });
    });
  });

  it("render box", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const boxs = getAllByTestId("box");

    boxs.forEach((box) => {
      expect(box).toBeInTheDocument();

      if (box.firstChild?.textContent === "odczuwalna") {
        expect(box.textContent).toBe(
          `odczuwalna${Math.round(currentWeather.main.feels_like)}°C`
        );
      }

      if (box.firstChild?.textContent === "ciśnienie") {
        expect(box.textContent).toBe(
          `ciśnienie${currentWeather.main.pressure} hPa`
        );
      }

      if (box.firstChild?.textContent === "wiatr") {
        expect(box.textContent).toBe(
          `wiatr${Math.round(currentWeather.wind.speed)} km/h`
        );
      }

      if (box.firstChild?.textContent === "kierunek") {
        expect(box.textContent).toBe("kierunek");
      }
    });
  });

  it("whether the box has appropriate styles", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const boxs = getAllByTestId("box");

    boxs.forEach((box) => {
      expect(box).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "5px",
      });
    });
  });

  it("render label", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const labels = getAllByTestId("label");

    labels.forEach((label, idx) => {
      expect(label).toBeInTheDocument();

      if (idx === 0) expect(label.textContent).toBe("odczuwalna");
      if (idx === 1) expect(label.textContent).toBe("ciśnienie");
      if (idx === 2) expect(label.textContent).toBe("wiatr");
      if (idx === 3) expect(label.textContent).toBe("kierunek");
    });
  });

  it("whether the label has appropriate styles", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const labels = getAllByTestId("label");

    labels.forEach((label) => {
      expect(label).toHaveStyle({
        fontSize: "9px",
        fontWeight: "bold",
        textTransform: "uppercase",
      });
    });
  });

  it("render windDirectionArrow", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const windDirectionArrow = getByTestId("windDirectionArrow");

    expect(windDirectionArrow).toBeInTheDocument();
    expect(windDirectionArrow.getAttribute("src")).toBe("arrow-up.png");
    expect(windDirectionArrow).toHaveStyle(
      `transform: rotate(${currentWeather.wind.deg + 180}deg);`
    );
  });

  it("whether the windDirectionArrow has appropriate styles", () => {
    const { getByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const windDirectionArrow = getByTestId("windDirectionArrow");

    expect(windDirectionArrow).toHaveStyle({
      transform: "rotate(380deg)",
      width: "20px",
      height: "20px",
    });
  });

  it("render sunriseSunset", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const sunriseSunsets = getAllByTestId("sunriseSunset");

    sunriseSunsets.forEach((sunriseSunset, idx) => {
      expect(sunriseSunset).toBeInTheDocument();

      if (idx === 0) {
        expect(sunriseSunset.textContent).toBe(
          dateTimeConverter(
            currentWeather.sys.sunrise,
            currentWeather.timezone,
            "time"
          )
        );
      }

      if (idx === 1) {
        expect(sunriseSunset.textContent).toBe(
          dateTimeConverter(
            currentWeather.sys.sunset,
            currentWeather.timezone,
            "time"
          )
        );
      }
    });
  });

  it("whether the sunriseSunset has appropriate styles", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const sunriseSunsets = getAllByTestId("sunriseSunset");

    sunriseSunsets.forEach((sunriseSunset) => {
      expect(sunriseSunset).toHaveStyle({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      });
    });
  });

  it("render img", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const imgs = getAllByTestId("img");

    imgs.forEach((img, idx) => {
      expect(img).toBeInTheDocument();

      if (idx === 0) {
        expect(img.getAttribute("src")).toBe("sunrise.png");
      }

      if (idx === 1) {
        expect(img.getAttribute("src")).toBe("sunset.png");
      }
    });
  });

  it("whether the img has appropriate styles", () => {
    const { getAllByTestId } = render(
      <CurrentWeatherInfo currentWeather={currentWeather} />
    );
    const imgs = getAllByTestId("img");

    imgs.forEach((img) => {
      expect(img).toHaveStyle({
        maxWidth: "25px",
        height: "auto",
        margin: "5px",
      });
    });
  });
});
