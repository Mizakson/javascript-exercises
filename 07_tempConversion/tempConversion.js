// round to 1 decimal place
// Math.round(number * 10) / 10;

const convertToCelsius = function(temp) {
  let celciusTemp = (temp - 32) * (5/9);
  let roundedTemp = Math.round(celciusTemp * 10) / 10;
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  let fahrenheitTemp = (temp * (9/5)) + 32;
  let roundedTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundedTemp;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
