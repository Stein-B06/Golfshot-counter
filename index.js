let holeNumber = 1;
let holeInfo = document.getElementById("hole-info");
let currentNumber = 0;
let incrementValueDisplay = document.getElementById("increment-value");

function increment() {
  // Increment the number by 1
  currentNumber += 1;
  incrementValueDisplay.textContent = `Golfshots: ${currentNumber}`;
}

function save() {
  // Get the current number and display it along with the current hole number
  holeInfo.textContent += `(Hole ${holeNumber}) ${currentNumber} - `;
  holeNumber++;
  // Reset the current number to 0
  currentNumber = 0;
  incrementValueDisplay.textContent = `Golfshots: 0`;
}

function reset() {
  // Clear the hole information, reset the hole number, and reset the increment value
  holeInfo.textContent = "";
  holeNumber = 1;
  currentNumber = 0;
  incrementValueDisplay.textContent = `Golfshots: 0`;
}
