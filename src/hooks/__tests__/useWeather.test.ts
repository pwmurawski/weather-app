import { renderHook, waitFor } from "@testing-library/react";
import { useWeather } from "../useWeather";

const data = { cod: 200 };

const renderUseWeather = () => {
  const utils = renderHook(
    ({ fetcher, searchValue, lat, lng }) =>
      useWeather(fetcher, searchValue, lat, lng),
    {
      initialProps: {
        fetcher: () => Promise.resolve(data),
        searchValue: "",
        lat: undefined as number | undefined,
        lng: undefined as number | undefined,
      },
    }
  );

  return { ...utils };
};

describe("useWeather", () => {
  it("should return an array with three elements", async () => {
    const { result } = renderUseWeather();

    expect(Array.isArray(result.current)).toBe(true);
    expect(result.current).toHaveLength(2);
  });

  it("initial values before executing the function fetcher", async () => {
    const { result } = renderUseWeather();

    expect(result.current[0]).toBe(undefined);
    expect(result.current[1]).toBe(false);
  });

  it("whether loading works correctly for changing searchValue", async () => {
    const { result, rerender } = renderUseWeather();

    expect(result.current[1]).toBe(false);

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "warsaw",
      lat: undefined,
      lng: undefined,
    });

    expect(result.current[1]).toBe(true);

    await waitFor(() => {
      expect(result.current[1]).toBe(false);
    });
  });

  it("whether loading works correctly for changing lat and lng", async () => {
    const { result, rerender } = renderUseWeather();

    expect(result.current[1]).toBe(false);

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "",
      lat: 21,
      lng: 52,
    });

    expect(result.current[1]).toBe(true);

    await waitFor(() => {
      expect(result.current[1]).toBe(false);
    });
  });

  it("if the searchValue changes, the fetcher function should execute", async () => {
    const { result, rerender } = renderUseWeather();

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "warsaw",
      lat: undefined,
      lng: undefined,
    });

    expect(result.current[0]).toBe(undefined);

    await waitFor(() => {
      expect(result.current[0]).toStrictEqual(data);
    });
  });

  it("if the lat and lng changes, the fetcher function should execute", async () => {
    const { result, rerender } = renderUseWeather();

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "",
      lat: 21,
      lng: 52,
    });

    expect(result.current[0]).toBe(undefined);

    await waitFor(() => {
      expect(result.current[0]).toStrictEqual(data);
    });
  });

  it("if lat or lng alone is changed then the fetcher function should not execute", async () => {
    const { result, rerender } = renderUseWeather();

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "",
      lat: 21,
      lng: undefined,
    });

    expect(result.current[0]).toBe(undefined);

    await waitFor(() => {
      expect(result.current[0]).toBe(undefined);
    });

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "",
      lat: undefined,
      lng: 52,
    });

    expect(result.current[0]).toBe(undefined);

    await waitFor(() => {
      expect(result.current[0]).toBe(undefined);
    });
  });

  it("if code has a value of 400, the state should not change", async () => {
    const { result, rerender } = renderUseWeather();

    rerender({
      fetcher: () => Promise.resolve(data),
      searchValue: "warsaw",
      lat: undefined,
      lng: undefined,
    });

    expect(result.current[0]).toBe(undefined);

    await waitFor(() => {
      expect(result.current[0]).toStrictEqual(data);
    });

    rerender({
      fetcher: () => Promise.resolve({ cod: 400 }),
      searchValue: "w",
      lat: undefined,
      lng: undefined,
    });

    expect(result.current[0]).toBe(data);

    await waitFor(() => {
      expect(result.current[0]).toStrictEqual(data);
    });
  });
});
