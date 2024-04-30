"use strict";




function convertFtoC(fahrenheitTemperature){
    var celsiusTempature = ((fahrenheitTemperature - 32) * 5) / 9;
return celsiusTempature;
}
var f = 92;
let c = convertFtoC(f);

console.log(
    "The fahrenheit temperature of " +
      f +
      " is " +
      c +
      " celsius."
  );