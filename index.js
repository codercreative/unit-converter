/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const errorMsg = document.getElementById("error-msg");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  renderConversion();
});

function renderConversion() {
  let userInput = Number(numberInput.value);

  if (Number.isFinite(userInput)) {
    lengthEl.textContent = `${userInput} meters = ${(userInput * 3.281).toFixed(
      3
    )} feet | ${userInput} feet = ${(userInput / 3.281).toFixed(3)} meters`;

    volumeEl.textContent = `${userInput} liters = ${(userInput * 0.264).toFixed(
      3
    )} gallons | ${userInput} gallons = ${(userInput / 0.264).toFixed(
      3
    )} liters`;

    massEl.textContent = `${userInput} kilos = ${(userInput * 2.204).toFixed(
      3
    )} pounds | ${userInput} pounds = ${(userInput / 2.204).toFixed(3)} kilos`;

    errorMsg.textContent = ``;
    errorMsg.classList.remove("border");
  } else {
    errorMsg.textContent = `Please enter a number!`;
    lengthEl.textContent = "";
    volumeEl.textContent = "";
    massEl.textContent = "";
    errorMsg.classList.add("border");
  }
}
