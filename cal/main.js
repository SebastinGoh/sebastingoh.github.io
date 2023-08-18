document.body.onload = clearCalculatorDisplay();

function setCalculatorDisplay(num) {
    currentDisplay = document.getElementById("calculator-display").innerHTML;
    if (currentDisplay == 0){
        newDisplay = num;
    } else {
        newDisplay = currentDisplay + num;
    }
    document.getElementById("calculator-display").innerHTML = "";
    document.getElementById("calculator-display").innerHTML = newDisplay;
}

function clearCalculatorDisplay() {
    document.getElementById("calculator-display").innerHTML = "0";
}

buttons = document.querySelectorAll('.calculator-button');
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

function handleClick(event) {
    pressedButton = event.target.innerHTML.trim();
    operators = ['÷','×','−','+','.'];
    if (!isNaN(pressedButton) || operators.includes(pressedButton)) {
        setCalculatorDisplay(pressedButton);
    } else if (pressedButton == "AC") {
        clearCalculatorDisplay();
    } else if (pressedButton == "=") {
        evaluateCalculatorDisplay();
    }
}

function evaluateCalculatorDisplay() {
    currentDisplay = document.getElementById("calculator-display").innerHTML;
    nums = currentDisplay.split("");
    document.getElementById("calculator-display").innerHTML = nums;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1, num2, operator;

function operate(num1, operator, num2) {
    switch(operator) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}