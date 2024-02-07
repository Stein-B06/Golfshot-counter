let holeNumber = 1;
let currentNumber = 0;
let incrementCount = 0;
let incrementValueDisplay = document.getElementById("increment-value");
let incrementCountDisplay = document.getElementById("increment-count");
let totalShotsDisplay = document.getElementById("total-shots");
let holeInfoDisplay = document.getElementById("hole-info");

// Load the increment count and total shots from localStorage
let savedIncrementValue = parseInt(localStorage.getItem("incrementValue")) || 0;
let savedIncrementCount = parseInt(localStorage.getItem("incrementCount")) || 0;
let savedTotalShots = parseInt(localStorage.getItem("totalShots")) || 0;

// Set the initial increment value
currentNumber = savedIncrementValue;
incrementValueDisplay.textContent = `Current hole: ${currentNumber}`;
incrementCount = savedIncrementCount;
incrementCountDisplay.textContent = `Increment Count: ${incrementCount}`;
totalShotsDisplay.textContent = `Total Shots: ${savedTotalShots}`;

// Load hole info from localStorage
let savedHoleInfo = localStorage.getItem("holeInfo") || "";
if (savedHoleInfo) {
  holeInfoDisplay.textContent = savedHoleInfo;
}

function increment() {
  currentNumber += 1;
  incrementValueDisplay.textContent = `Current hole: ${currentNumber}`;
  incrementCount++;
  incrementCountDisplay.textContent = `Increment Count: ${incrementCount}`;

  // Store the increment value in local storage
  localStorage.setItem("incrementValue", currentNumber);
  localStorage.setItem("incrementCount", incrementCount);
}

function save() {
  holeInfoDisplay.textContent += `(Hole ${holeNumber} = ${currentNumber})-`;
  holeNumber++;
  currentNumber = 0;
  incrementValueDisplay.textContent = `Current hole: 0`;

  // Store hole info, increment count, incrementvalue and total shots in local storage with unique keys
  localStorage.setItem("holeInfo", holeInfoDisplay.textContent);
  localStorage.setItem("incrementCount", incrementCount);
  localStorage.setItem("totalShots", incrementCount);
  localStorage.setItem("incrementValue", currentNumber);
}

// Display dialog when click on reset button.
function showResetConfirmation() {
  let isConfirmed = confirm("Ready to reset?");

  // If user clicks okay, it reset.
  if (isConfirmed) {
    document.getElementById("reset-btn");

    // If user clicks cancel. dialog dissappear.
  } else {
    return;
  }
}

function reset() {
  // Clear data from localStorage and reset displays
  localStorage.removeItem("incrementValue");
  localStorage.removeItem("incrementCount");
  localStorage.removeItem("totalShots");
  localStorage.removeItem("holeInfo");
  holeInfoDisplay.textContent = "Golfshots per hole:";
  holeNumber = 1;
  currentNumber = 0;
  incrementValueDisplay.textContent = `Current hole: 0`;
  incrementCount = 0;
  incrementCountDisplay.textContent = `Increment Count: 0`;
  totalShotsDisplay.textContent = `Total Shots: 0`;
}

function displayTotalShots() {
  // Display the total number of shots and store it in localStorage
  totalShotsDisplay.textContent = `Total Shots: ${incrementCount}`;
  localStorage.setItem("totalShots", incrementCount);
}
