/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputNumber = document.getElementById("number");
const errorMsg = document.getElementById("error-msg");
const convertBtn = document.getElementById("convert-btn");

const convertMeters = document.getElementById("convert-meters");
const convertLiters = document.getElementById("convert-liters");
const convertKg = document.getElementById("convert-kilos");

convertBtn.addEventListener("click", function () {
  let userInput = userInputNumber.value;
  const number = /^[0-9]+$/;

  const multiplyMeter = (userInput * 3.281).toFixed(2);
  const divideFeet = (userInput / 3.281).toFixed(2);
  const multiplyLiter = (userInput * 0.264).toFixed(2);
  const divideGallons = (userInput / 0.264).toFixed(2);
  const multiplyKg = (userInput * 2.204).toFixed(2);
  const dividePounds = (userInput / 2.204).toFixed(2);

  if (userInput.match(number)) {
    errorMsg.textContent = ``;

    convertMeters.innerHTML = `
    <p> ${userInput} meters = ${multiplyMeter} feet | ${userInput} feet = ${divideFeet} meters </p>`;

    convertLiters.innerHTML = `
    <p> ${userInput} liters = ${multiplyLiter} gallons | ${userInput} gallons = ${divideGallons} liters </p>`;

    convertKg.innerHTML = `
    <p> ${userInput} kilos = ${multiplyKg} pounds | ${userInput} pounds = ${dividePounds} kilos </p>`;
  } else {
    errorMsg.innerHTML = `<p>Please enter a number</p>`;
  }
});
