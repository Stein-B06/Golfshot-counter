let holeNumber = 1;
let currentNumber = 0;
let incrementCount = 0;
let incrementValueDisplay = document.getElementById("increment-value");
let holeInfo = document.getElementById("hole-info");
let incrementCountDisplay = document.getElementById("increment-count");
let totalShotsDisplay = document.getElementById("total-shots");

// Load data from localStorage
let savedHoleInfo = localStorage.getItem("holeInfo");
if (savedHoleInfo) {
  holeInfo.textContent = savedHoleInfo;
}
// Load the increment count and total shots from localStorage
let savedIncrementCount = parseInt(localStorage.getItem("incrementCount")) || 0;
let savedTotalShots = parseInt(localStorage.getItem("totalShots")) || 0;

incrementCount = savedIncrementCount;
totalShotsDisplay.textContent = `Total Shots: ${savedTotalShots}`;
incrementCountDisplay.textContent = `Increment Count: ${incrementCount}`;

function increment() {
  // Increment the number by 1
  currentNumber += 1;
  incrementValueDisplay.textContent = `Golfshots: ${currentNumber}`;
  incrementCount++;
  incrementCountDisplay.textContent = `Increment Count: ${incrementCount}`;
}

function save() {
  // Get the current number and display it along with the current hole number
  holeInfo.textContent += `(Hole ${holeNumber}) ${currentNumber} - `;
  holeNumber++;
  // Reset the current number to 0
  currentNumber = 0;
  incrementValueDisplay.textContent = `Golfshots: 0`;

  // Store data in localStorage
  localStorage.setItem("holeInfo", holeInfo.textContent);
}

function reset() {
  // Clear data from localStorage
  localStorage.removeItem("holeInfo");
  localStorage.removeItem("incrementCount");
  localStorage.removeItem("totalShots");
  holeInfo.textContent = "";
  holeNumber = 1;
  currentNumber = 0;
  incrementValueDisplay.textContent = `Golfshots: 0`;
  incrementCount = 0;
  incrementCountDisplay.textContent = `Increment Count: 0`;
  totalShotsDisplay.textContent = ""; // Clear total shots display
}
function displayTotalShots() {
  // Display the total number of shots and store it in localStorage
  totalShotsDisplay.textContent = `Total Shots: ${incrementCount}`;
  localStorage.setItem("totalShots", incrementCount);
  localStorage.setItem("incrementCount", incrementCount);
}
