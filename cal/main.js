document.body.onload = clearCalculatorDisplay();

let num1 = "";
let operator = "";
let num2 = "";

function setCalculatorDisplay(num) {
    document.getElementById("calculator-display").innerHTML = "";
    document.getElementById("calculator-display").innerHTML = num;
}

function clearCalculatorDisplay() {
    setCalculatorDisplay(0);
}

buttons = document.querySelectorAll('.calculator-button');
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

function handleClick(event) {
    pressedButton = event.target.innerHTML.trim();
    operators = ['÷','×','−','+','.'];
    if (!isNaN(pressedButton)) {
        handleNumber(pressedButton);
    } else if (operators.includes(pressedButton)) {
        handleOperator(pressedButton);
    } else if (pressedButton == "AC") {
        clearCalculatorDisplay();
    } else if (pressedButton == "=") {
        evaluateCalculatorDisplay();
    }
}

function handleNumber(pressedButton) {
    currentDisplay = document.getElementById("calculator-display").innerHTML;
    if (currentDisplay.startsWith(0) || currentDisplay == "Error") {
        newDisplay = pressedButton;
    } else {
        newDisplay = currentDisplay + pressedButton;
    }
    setCalculatorDisplay(newDisplay);
}

function handleOperator(pressedButton) {
    currentDisplay = document.getElementById("calculator-display").innerHTML;
    if (currentDisplay.startsWith(0)) {
        newDisplay = 0;
    } else {
        newDisplay = currentDisplay + pressedButton;
    }
    setCalculatorDisplay(newDisplay);
}

function evaluateCalculatorDisplay() {
    currentDisplay = document.getElementById("calculator-display").innerHTML;
    nums = currentDisplay.split("");
    // check through each digit in array, assuming single operator single
    // store first as num1
    // store second as operator
    // store third as num2
    // switch statement to check value of 'operator'
    let num1 = nums[0];
    let operator = nums[1];
    let num2 = nums[2];
    
    newDisplay = operate(num1, operator, num2)
    setCalculatorDisplay(newDisplay);
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

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            newDisplay = add(num1, num2);
            break;
        case "−":
            newDisplay = subtract(num1, num2);
            break;
        case "×":
            newDisplay = multiply(num1, num2);
            break;
        case "÷":
            newDisplay = divide(num1, num2);
            break;
    }
    return newDisplay;
}