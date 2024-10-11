const fahrenheitTemp = prompt ("Please enter a temperature in degrees Fahrenheit to be converted into degrees Celsius:");

const convertToCelsius = (num1) => {
  celciusTemp = (num1 - 32) * (5/9);
}

const describeTemperature = (num1) => {
  if(num1<32) {
    return description = `very cold`;
  } else if(num1<64) {
    return description = `cold`;
  } else if(num1<86) {
    return description = `warm`;
  } else if(num1<100) {
    return description = `hot`;
  } else {
    return description = `very hot`;
  }
  }

convertToCelsius (Number(fahrenheitTemp));

describeTemperature (fahrenheitTemp);

alert (`${fahrenheitTemp} degrees Fahrenheit is equal to ${celciusTemp} degrees Celsius. This temperature feels ${description}!`);
