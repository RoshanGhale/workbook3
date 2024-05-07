"use strict";

function init() {
  const estimateButton = document.getElementById("estimateButton");

  const pickupDateInput = document.getElementById("pickupDateInput");
  pickupDateInput.min = new Date().toISOString().split("T")[0];

  estimateButton.omclick = estimateTotalCost;
}
window.onload = init;

function estimateTotalCost() {
  const pickupDateInput = document.getElementById("pickupDateInput");
  const numberOfDaysInput = document.getElementById("numberOfDaysInput").value;

  const tollTagCheckbox = document.getElementById("tollTagCheckbox").checked;
  const gpsCheckbox = document.getElementById("gpsCheckbox").checked;
  const roadsideCheckbox = document.getElementById("roadsideCheckbox").checked;

  const under25No = document.getElementById("under25No").checked;
  const under25Yes = document.getElementById("under25Yes").checked;

  const carRentalTotalId = document.getElementById("carRentalTotalId");
  const optionsId = document.getElementById("optionsId");
  const under25SurchargeId = document.getElementById("under25SurchargeId");
  const totalDueId = document.getElementById("totalDueId");
  console.log(estimateTotalCost);

  const carRental = 29.99;

  let carRentalTotal = carRental * numberOfDays;
  carRentalTotalId.innerText = carRentalTotal;
  console.log(carRentalTotal);

  let optionPerDay = 0;

  if (tollTagCheckbox) {
    optionPerDay += 3.95;
  }

  if (gpsCheckbox) {
    optionPerDay += 2.95;
  }

  if (roadsideCheckbox) {
    optionPerDay += 3.95;
  }

  let optionTotal = optionPerDay * numberOfDays;
  optionsId.innerText = optionTotal;

  let underAgeTotal = 0;
  if (under25Yes) {
    underAgeTotal += carRental * 0.3;
  }

  under25SurchargeId.innerText = underAgeTotal;
  let totalDue = carRentalTotal + optionTotal + underAgeTotal;
  totalDueId.innerText = totalDue;

  const displayTable = document.getElementById("displayTable");
  if (displayTable.style.display === "none") {
    displayTable.style.display = "block";
  } else {
    displayTable.style.display = "none";
  }
}
