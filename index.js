const fahrenheitTemp = prompt ("Please enter a temperature in degrees Fahrenheit to be converted into degrees Celsius:");

const convertToCelsius = (num1) => {
  const celciusTemp = (num1 - 32) * (5/9);
  return celciusTemp;
}

const describeTemperature = (num1) => {
  if(num1<32) {
    return `very cold`;
  } else if(num1<64) {
    return `cold`;
  } else if(num1<86) {
    return `warm`;
  } else if(num1<100) {
    return `hot`;
  } else {
    return `very hot`;
  }
}

const convertedTemp = convertToCelsius (Number(fahrenheitTemp));

const description = describeTemperature (fahrenheitTemp);

alert (`${fahrenheitTemp} degrees Fahrenheit is equal to ${convertedTemp} degrees Celsius. This temperature feels ${description}!`);
