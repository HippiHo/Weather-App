import { formatTempToCelsius, formatToHours, formatToDay } from "./helpers.js";

describe("Testing the helper functions", () => {
  const testDate = "2017-02-16 12:00:00";

  it("Formats 0 Kelvin to round -273°C", () => {
    expect(formatTempToCelsius(0)).toBe(-273);
  });

  it("Formats 300 Kelvin to round 27°C", () => {
    expect(formatTempToCelsius(300)).toBe(27);
  });

  it("Formats date text to 12 hours", () => {
    expect(formatToHours(testDate)).toBe(12);
  });

  it("Formats date text to Thursday 16. February", () => {
    expect(formatToDay(testDate)).toBe("Thursday 16. February");
  });
});
