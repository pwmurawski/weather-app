import dateTimeConverter from "../dateTimeConverter";

const unixTime = 1640995260;
const timeZone = 3600;

describe("dateTimeConverter", () => {
  it("does it correctly convert to datetime", () => {
    expect(dateTimeConverter(unixTime, timeZone)).toBe("01.01.2022 01:01");
  });

  it("does it correctly convert to date", () => {
    expect(dateTimeConverter(unixTime, timeZone, "date")).toBe("01.01.2022");
  });

  it("does it correctly convert to time", () => {
    expect(dateTimeConverter(unixTime, timeZone, "time")).toBe("01:01");
  });

  it("does it convert the time zone correctly", () => {
    const warsawTimeZone = 3600;
    const newYorkTimeZone = -18000;

    expect(dateTimeConverter(unixTime, warsawTimeZone)).toBe(
      "01.01.2022 01:01"
    );
    expect(dateTimeConverter(unixTime, newYorkTimeZone)).toBe(
      "31.12.2021 19:01"
    );
  });
});
