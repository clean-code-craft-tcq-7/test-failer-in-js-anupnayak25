import { expect } from "chai";

function sensorStub() {
    return {
        temperatureInC: 50,
        precipitation: 70,
        humidity: 26,
        windSpeedKMPH: 52
    };
}

function report(sensorReader) {
    const readings = sensorReader();
    let weather = "Sunny Day";

    if (readings.temperatureInC > 25) {
        if (readings.precipitation >= 20 && readings.precipitation < 60) {
            weather = "Partly Cloudy";
        } else if (readings.windSpeedKMPH > 50) {
            weather = "Alert, Stormy with heavy rain";
        }
    }
    return weather;
}

function testRainy() {
    const weather = report(sensorStub);
    console.log(weather);
    expect(weather).includes("rain", "Test failed: Expected 'rain' in weather description");
}
function highPrecipLowWindStub() {
    return {
        temperatureInC: 30,
        precipitation: 80,   // > 60
        humidity: 90,
        windSpeedKMPH: 10    // < 50
    };
}

function testHighPrecipitation() {
 const weather = report(highPrecipLowWindStub);
    console.log(weather);
     expect(weather).is.not.empty;
    expect(weather).includes("rain", "Expected rainy conditions for high precipitation and low wind");
   
}

testRainy();
testHighPrecipitation();
console.log("All is well (maybe!)");
