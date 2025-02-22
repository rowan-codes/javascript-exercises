const convertToCelsius = function(tempFahrenheit) {
  let convertedToCelsius = (tempFahrenheit - 32) * (5/9);
  let roundedCelsius = Math.round(convertedToCelsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  let convertedToFahrenheit = tempCelsius * (9/5) + 32;
  let roundedFahrenheit = Math.round(convertedToFahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
