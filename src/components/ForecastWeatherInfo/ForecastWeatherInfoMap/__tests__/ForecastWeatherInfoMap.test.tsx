import { render } from "@testing-library/react";
import ForecastWeatherInfoMap from "../ForecastWeatherInfoMap";

const forecastWeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1672682400,
      main: {
        temp: 11.13,
        feels_like: 10.28,
        temp_min: 10.24,
        temp_max: 11.13,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1003,
        humidity: 76,
        temp_kf: 0.89,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "zachmurzenie małe",
          icon: "03n",
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 4.35,
        deg: 222,
        gust: 12.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-02 18:00:00",
    },
    {
      dt: 1672693200,
      main: {
        temp: 10.47,
        feels_like: 9.5,
        temp_min: 9.91,
        temp_max: 10.47,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1004,
        humidity: 74,
        temp_kf: 0.56,
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
        all: 65,
      },
      wind: {
        speed: 5.47,
        deg: 245,
        gust: 15.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-02 21:00:00",
    },
    {
      dt: 1672704000,
      main: {
        temp: 9.69,
        feels_like: 7,
        temp_min: 9.69,
        temp_max: 9.69,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1005,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 5.54,
        deg: 254,
        gust: 13.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 00:00:00",
    },
    {
      dt: 1672714800,
      main: {
        temp: 9.43,
        feels_like: 6.89,
        temp_min: 9.43,
        temp_max: 9.43,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1006,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.96,
        deg: 275,
        gust: 11.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 03:00:00",
    },
    {
      dt: 1672725600,
      main: {
        temp: 7.9,
        feels_like: 5.08,
        temp_min: 7.9,
        temp_max: 7.9,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1008,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.72,
        deg: 270,
        gust: 11.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 06:00:00",
    },
    {
      dt: 1672736400,
      main: {
        temp: 7.44,
        feels_like: 4.29,
        temp_min: 7.44,
        temp_max: 7.44,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1010,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 5.24,
        deg: 282,
        gust: 10.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-03 09:00:00",
    },
    {
      dt: 1672747200,
      main: {
        temp: 7.85,
        feels_like: 4.66,
        temp_min: 7.85,
        temp_max: 7.85,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1010,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04d",
        },
      ],
      clouds: {
        all: 88,
      },
      wind: {
        speed: 5.61,
        deg: 282,
        gust: 10.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-03 12:00:00",
    },
    {
      dt: 1672758000,
      main: {
        temp: 6.01,
        feels_like: 2.58,
        temp_min: 6.01,
        temp_max: 6.01,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1012,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "pochmurnie",
          icon: "02n",
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 5.04,
        deg: 280,
        gust: 10.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 15:00:00",
    },
    {
      dt: 1672768800,
      main: {
        temp: 4.66,
        feels_like: 1.31,
        temp_min: 4.66,
        temp_max: 4.66,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1013,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "pochmurnie",
          icon: "02n",
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 4.23,
        deg: 279,
        gust: 9.44,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 18:00:00",
    },
    {
      dt: 1672779600,
      main: {
        temp: 3.48,
        feels_like: 0.34,
        temp_min: 3.48,
        temp_max: 3.48,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1014,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "bezchmurnie",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 3.47,
        deg: 274,
        gust: 8.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 21:00:00",
    },
    {
      dt: 1672790400,
      main: {
        temp: 2.45,
        feels_like: -0.24,
        temp_min: 2.45,
        temp_max: 2.45,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1014,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "bezchmurnie",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.63,
        deg: 270,
        gust: 7.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-04 00:00:00",
    },
    {
      dt: 1672801200,
      main: {
        temp: 1.73,
        feels_like: -0.49,
        temp_min: 1.73,
        temp_max: 1.73,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1013,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "bezchmurnie",
          icon: "01n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 2.04,
        deg: 246,
        gust: 5.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-04 03:00:00",
    },
    {
      dt: 1672812000,
      main: {
        temp: 1.69,
        feels_like: -1.22,
        temp_min: 1.69,
        temp_max: 1.69,
        pressure: 1027,
        sea_level: 1027,
        grnd_level: 1012,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "pochmurnie",
          icon: "02n",
        },
      ],
      clouds: {
        all: 24,
      },
      wind: {
        speed: 2.71,
        deg: 192,
        gust: 7.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-04 06:00:00",
    },
    {
      dt: 1672822800,
      main: {
        temp: 3.97,
        feels_like: 0.4,
        temp_min: 3.97,
        temp_max: 3.97,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1009,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.34,
        deg: 192,
        gust: 12.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-04 09:00:00",
    },
    {
      dt: 1672833600,
      main: {
        temp: 6.72,
        feels_like: 3.06,
        temp_min: 6.72,
        temp_max: 6.72,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1004,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 6.04,
        deg: 207,
        gust: 14.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-04 12:00:00",
    },
    {
      dt: 1672844400,
      main: {
        temp: 7.44,
        feels_like: 3.29,
        temp_min: 7.44,
        temp_max: 7.44,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1000,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 8.2,
        deg: 227,
        gust: 16.22,
      },
      visibility: 10000,
      pop: 0.23,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-04 15:00:00",
    },
    {
      dt: 1672855200,
      main: {
        temp: 6.86,
        feels_like: 2.42,
        temp_min: 6.86,
        temp_max: 6.86,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 997,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.6,
        deg: 237,
        gust: 16.67,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 1.36,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-04 18:00:00",
    },
    {
      dt: 1672866000,
      main: {
        temp: 7.69,
        feels_like: 3.54,
        temp_min: 7.69,
        temp_max: 7.69,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 995,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.46,
        deg: 244,
        gust: 16.7,
      },
      visibility: 10000,
      pop: 0.71,
      rain: {
        "3h": 0.49,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-04 21:00:00",
    },
    {
      dt: 1672876800,
      main: {
        temp: 7.63,
        feels_like: 3.48,
        temp_min: 7.63,
        temp_max: 7.63,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 992,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.38,
        deg: 247,
        gust: 16.05,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 0.84,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-05 00:00:00",
    },
    {
      dt: 1672887600,
      main: {
        temp: 8.8,
        feels_like: 4.57,
        temp_min: 8.8,
        temp_max: 8.8,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 989,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 10.23,
        deg: 255,
        gust: 19.63,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.78,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-05 03:00:00",
    },
    {
      dt: 1672898400,
      main: {
        temp: 8.67,
        feels_like: 4.6,
        temp_min: 8.67,
        temp_max: 8.67,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 989,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 9.37,
        deg: 274,
        gust: 16.69,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 0.53,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-05 06:00:00",
    },
    {
      dt: 1672909200,
      main: {
        temp: 8.22,
        feels_like: 4.41,
        temp_min: 8.22,
        temp_max: 8.22,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 991,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.81,
        deg: 277,
        gust: 15.39,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        "3h": 1.07,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-05 09:00:00",
    },
    {
      dt: 1672920000,
      main: {
        temp: 8.35,
        feels_like: 4.2,
        temp_min: 8.35,
        temp_max: 8.35,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 991,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 9.27,
        deg: 279,
        gust: 17.66,
      },
      visibility: 10000,
      pop: 0.93,
      rain: {
        "3h": 0.79,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-05 12:00:00",
    },
    {
      dt: 1672930800,
      main: {
        temp: 4.56,
        feels_like: -0.64,
        temp_min: 4.56,
        temp_max: 4.56,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 994,
        humidity: 61,
        temp_kf: 0,
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
        all: 59,
      },
      wind: {
        speed: 8.76,
        deg: 294,
        gust: 16.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-05 15:00:00",
    },
    {
      dt: 1672941600,
      main: {
        temp: 3.73,
        feels_like: -1.71,
        temp_min: 3.73,
        temp_max: 3.73,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 996,
        humidity: 63,
        temp_kf: 0,
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
        all: 79,
      },
      wind: {
        speed: 8.7,
        deg: 287,
        gust: 16.5,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-05 18:00:00",
    },
    {
      dt: 1672952400,
      main: {
        temp: 3.22,
        feels_like: -2.04,
        temp_min: 3.22,
        temp_max: 3.22,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 998,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 7.72,
        deg: 292,
        gust: 14.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-05 21:00:00",
    },
    {
      dt: 1672963200,
      main: {
        temp: 2.76,
        feels_like: -2.13,
        temp_min: 2.76,
        temp_max: 2.76,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1000,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.43,
        deg: 300,
        gust: 12.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-06 00:00:00",
    },
    {
      dt: 1672974000,
      main: {
        temp: 1.45,
        feels_like: -2.63,
        temp_min: 1.45,
        temp_max: 1.45,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1002,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.19,
        deg: 297,
        gust: 8.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-06 03:00:00",
    },
    {
      dt: 1672984800,
      main: {
        temp: 0.66,
        feels_like: -1.94,
        temp_min: 0.66,
        temp_max: 0.66,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1002,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 2.22,
        deg: 287,
        gust: 4.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-06 06:00:00",
    },
    {
      dt: 1672995600,
      main: {
        temp: 1.41,
        feels_like: -0.31,
        temp_min: 1.41,
        temp_max: 1.41,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1002,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "zachmurzenie duże",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.61,
        deg: 132,
        gust: 2,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-06 09:00:00",
    },
    {
      dt: 1673006400,
      main: {
        temp: 0.45,
        feels_like: -3.79,
        temp_min: 0.45,
        temp_max: 0.45,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: "Snow",
          description: "opady śniegu",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.09,
        deg: 127,
        gust: 8.25,
      },
      visibility: 64,
      pop: 0.88,
      snow: {
        "3h": 1.7,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-06 12:00:00",
    },
    {
      dt: 1673017200,
      main: {
        temp: 1.19,
        feels_like: -3.31,
        temp_min: 1.19,
        temp_max: 1.19,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 994,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.79,
        deg: 143,
        gust: 10.82,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.67,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-06 15:00:00",
    },
    {
      dt: 1673028000,
      main: {
        temp: 6.4,
        feels_like: 2.98,
        temp_min: 6.4,
        temp_max: 6.4,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 991,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.25,
        deg: 239,
        gust: 14.87,
      },
      visibility: 5722,
      pop: 1,
      rain: {
        "3h": 1.86,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-06 18:00:00",
    },
    {
      dt: 1673038800,
      main: {
        temp: 7.65,
        feels_like: 3.65,
        temp_min: 7.65,
        temp_max: 7.65,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 991,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.89,
        deg: 266,
        gust: 15.52,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.84,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-06 21:00:00",
    },
    {
      dt: 1673049600,
      main: {
        temp: 5.35,
        feels_like: 1.55,
        temp_min: 5.35,
        temp_max: 5.35,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 992,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 5.5,
        deg: 266,
        gust: 12.42,
      },
      visibility: 10000,
      pop: 0.96,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-07 00:00:00",
    },
    {
      dt: 1673060400,
      main: {
        temp: 5.54,
        feels_like: 1.37,
        temp_min: 5.54,
        temp_max: 5.54,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 992,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 6.56,
        deg: 256,
        gust: 14.13,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-07 03:00:00",
    },
    {
      dt: 1673071200,
      main: {
        temp: 3.92,
        feels_like: -0.91,
        temp_min: 3.92,
        temp_max: 3.92,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 992,
        humidity: 77,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "słabe opady deszczu",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 7.08,
        deg: 277,
        gust: 14.57,
      },
      visibility: 6802,
      pop: 0.39,
      rain: {
        "3h": 0.36,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-07 06:00:00",
    },
    {
      dt: 1673082000,
      main: {
        temp: 1.18,
        feels_like: -4.19,
        temp_min: 1.18,
        temp_max: 1.18,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 995,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: "Snow",
          description: "słabe opady śniegu",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.51,
        deg: 276,
        gust: 11.98,
      },
      visibility: 3320,
      pop: 0.59,
      snow: {
        "3h": 0.31,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-07 09:00:00",
    },
    {
      dt: 1673092800,
      main: {
        temp: 1.55,
        feels_like: -3.05,
        temp_min: 1.55,
        temp_max: 1.55,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 997,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: "Snow",
          description: "słabe opady śniegu",
          icon: "13d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.13,
        deg: 296,
        gust: 8.77,
      },
      visibility: 5936,
      pop: 0.59,
      snow: {
        "3h": 0.37,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-07 12:00:00",
    },
    {
      dt: 1673103600,
      main: {
        temp: -1.95,
        feels_like: -7.34,
        temp_min: -1.95,
        temp_max: -1.95,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1002,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: "Snow",
          description: "słabe opady śniegu",
          icon: "13n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.98,
        deg: 25,
        gust: 6.45,
      },
      visibility: 10000,
      pop: 0.4,
      snow: {
        "3h": 0.2,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-07 15:00:00",
    },
  ],
  city: {
    id: 756135,
    name: "Warszawa",
    coord: {
      lat: 52.2328,
      lon: 21.0031,
    },
    country: "PL",
    population: 1000000,
    timezone: 3600,
    sunrise: 1672641911,
    sunset: 1672670046,
  },
};

describe("ForecastWeatherInfoMap component", () => {
  it("render containerForecastWeatherInfo", () => {
    const { getAllByTestId } = render(
      <ForecastWeatherInfoMap forecastWeatherData={forecastWeatherData} />
    );
    const containers = getAllByTestId("containerForecastWeatherInfo");

    expect(containers.length).toBe(forecastWeatherData.list.length);

    containers.forEach((containerForecastWeatherInfo) => {
      expect(containerForecastWeatherInfo).toBeInTheDocument();
    });
  });
});
