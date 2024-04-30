"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  //console.log(name, address, city, state, zip);
  console.log(name);
  console.log(address);
  console.log(city + ",", state, zip);
  console.log();
}

displayMailingLabel("Roshan", "1830E 22", "Queens", "New York", "11111");

displayMailingLabel("karma", "301N caraway", "Astoria", "New York", "11004");

function addNumber(num1, num2) {
  
  console.log();
}

function displayReceipt(totalDue, amountPaid) {
  var change = amountPaid - totalDue;
  console.log("Total Due : $" + totalDue);
  console.log("Amount Paid : $" + amountPaid);
  if (change > 0) {
    console.log("Change : $" + change);
  } else if (change < 0) {
    change = Math.abs(change);
    var changeFormatted = change.toFixed(2);
    console.log("you still owe another: $" + changeFormatted);
  }
}

displayReceipt(11.75, 20);
displayReceipt(30, 25);
displayReceipt(15, 15);
