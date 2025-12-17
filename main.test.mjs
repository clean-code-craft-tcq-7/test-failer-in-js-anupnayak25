import { describe, it } from "node:test";
import { expect } from "chai";
import { size } from "./tshirts.mjs";
import { report } from "./weatherreport.mjs";
import { print_color_map } from "./misaligned.mjs";

describe("tshirt tests", function () {
  it("should return correct size for given cms", function () {
    expect(size(37)).equals("S");
    expect(size(40)).equals("M");
    expect(size(43)).equals("L");
    expect(size(38)).equals("M");
  });
});
describe("misaligned color map tests", function () {
  it("should print 25 color combinations", function () {
    const { result } = print_color_map();
    expect(result).equals(25);
  });
  it("should start numbering from 1", function () {
    const { lines } = print_color_map();
    const firstLine = lines[0];
    expect(firstLine).equals("1 | White | Blue");
  });
});

describe("weather report tests", function () {
  function windyWetStub() {
    return {temperatureInC: 50, precipitation: 70, humidity: 26, windSpeedKMPH: 52,
    };
}
  function highPrecipLowWindStub() {
    return { temperatureInC: 30, precipitation: 80, humidity: 90, windSpeedKMPH: 10 };
  }

  it("should report rainy weather for windy and wet conditions", function () {
    const weather = report(windyWetStub);
    console.log(weather);
    expect(weather).includes("rain");
  });
  it("should report rain for high precipitation and low wind", function () {
    const weather = report(highPrecipLowWindStub);
    console.log(weather);
    expect(weather).includes("rain");
  });
});
