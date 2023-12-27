let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function calculateResult() {
    let result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function evaluateKey(key) {
  if (key === "Enter") {
    calculateResult();
  } else if (key === "Escape") {
    clearDisplay();
  } else {
    appendToDisplay(key);
  }
}

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

document.addEventListener("keydown", function (event) {
  evaluateKey(event.key);
});


