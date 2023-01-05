import { z } from "zod";

export const CurrentWeatherSchema = z.object({
  coord: z
    .object({
      lon: z.number(),
      lat: z.number(),
    })
    .optional(),
  weather: z
    .array(
      z.object({
        id: z.number(),
        main: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    )
    .optional(),
  base: z.string().optional(),
  main: z
    .object({
      temp: z.number(),
      feels_like: z.number(),
      temp_min: z.number(),
      temp_max: z.number(),
      pressure: z.number(),
      humidity: z.number(),
    })
    .optional(),
  visibility: z.number().optional(),
  wind: z
    .object({
      speed: z.number(),
      deg: z.number(),
    })
    .optional(),
  clouds: z
    .object({
      all: z.number(),
    })
    .optional(),
  dt: z.number().optional(),
  sys: z
    .object({
      type: z.number().optional(),
      id: z.number().optional(),
      message: z.number().optional(),
      country: z.string().optional(),
      sunrise: z.number(),
      sunset: z.number(),
    })
    .optional(),
  timezone: z.number().optional(),
  id: z.number().optional(),
  name: z.string().optional(),
  cod: z.union([z.string(), z.number()]),
  message: z.string().optional(),
});

export type CurrentWeatherType = z.infer<typeof CurrentWeatherSchema>;
