export function sensorStub() {
  return {
    temperatureInC: 50,
    precipitation: 70,
    humidity: 26,
    windSpeedKMPH: 52,
  };
}

export function highPrecipLowWindStub() {
  return { temperatureInC: 30, 
    precipitation: 80, 
    humidity: 90, 
    windSpeedKMPH: 10 };
}

export function report(sensorReader) {
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
