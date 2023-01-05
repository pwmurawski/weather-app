import { z } from "zod";

const ForecastWeatherListSchema = z.object({
  dt: z.number(),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    sea_level: z.number(),
    grnd_level: z.number(),
    humidity: z.number(),
    temp_kf: z.number(),
  }),
  weather: z.array(
    z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
  clouds: z.object({
    all: z.number(),
  }),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number(),
  }),
  visibility: z.number(),
  pop: z.number(),
  sys: z.object({
    pod: z.string(),
  }),
  dt_txt: z.string(),
});

const ForecastWeatherCitySchema = z.object({
  id: z.number(),
  name: z.string(),
  coord: z.object({
    lat: z.number(),
    lon: z.number(),
  }),
  country: z.string(),
  population: z.number(),
  timezone: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
});

export const ForecastWeatherSchema = z.object({
  cod: z.union([z.string(), z.number()]),
  message: z.union([z.number(), z.string()]),
  cnt: z.number().optional(),
  list: z.array(ForecastWeatherListSchema).optional(),
  city: ForecastWeatherCitySchema.optional(),
});

export type ForecastWeatherType = z.infer<typeof ForecastWeatherSchema>;

export type ForecastWeatherListType = z.infer<typeof ForecastWeatherListSchema>;

export type ForecastWeatherCityType = z.infer<typeof ForecastWeatherCitySchema>;
