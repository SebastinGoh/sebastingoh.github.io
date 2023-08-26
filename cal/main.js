// Possible Additions to make
/* 
- Add chaining functionality without 'equal' pressing
- After first evaluation, if number pressed, reset num1
- Limit screen showing digits
- Give error message when dividing by 0 (now gives 'Infinity')
- handleAlteratorButton fix for multiple presses to do nothing (not give error)
*/

document.body.onload = resetCalculatorDisplay(true);

function setCalculatorDisplay() {
    document.getElementById("calculator-display").innerHTML = "";
    if (equation[2] == '') {
        document.getElementById("calculator-display").innerHTML = equation[0];
    } else {
        document.getElementById("calculator-display").innerHTML = equation[2];
    }
}

function resetCalculatorDisplay(initial = false) {
    if (!initial) {
        removeActiveOperatorButton();
    }
    evaluatedBefore = false;
    equation = [0, '', ''];   
    setCalculatorDisplay();
}

const buttons = document.querySelectorAll('.calculator-button');
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

function handleClick(event) {
    pressedButton = event.target.innerHTML.trim();
    evaluateButtonType(pressedButton);
    console.log(equation);
}

function checkFirstButton(equation) {
    if (equation[0] == 0) {
        return true;
    } else {
        return false;
    }
}

function evaluateButtonType(pressedButton) {
    operators = ['÷','×','−','+'];
    alterators = ['.','%','±'];
    if (!isNaN(pressedButton)) {
        handleNumberButton(pressedButton);
    } else if (operators.includes(pressedButton)) {
        handleOperatorButton(pressedButton);
    } else if (alterators.includes(pressedButton)) {
        handleAlteratorButton(pressedButton);
    } else if (pressedButton == "AC") {
        resetCalculatorDisplay();
    } else if (pressedButton == "=") {
        if (canEvaluate()) {
            evaluateEquation();
        }
    }
}

function handleNumberButton(pressedButton) {
    if (checkFirstButton(equation) || evaluatedBefore) {
        equation[0] = pressedButton;
    } else {
        if (equation[1] == '') {
            newNum = equation[0] + pressedButton;
            equation[0] = newNum;
        } else if (equation[2] == '') {
            equation[2] = pressedButton;
            removeActiveOperatorButton();
        } else {
            newNum = equation[2] + pressedButton;
            equation[2] = newNum;
        }
    }
    setCalculatorDisplay();
}

function handleOperatorButton(pressedButton) {
    changeActiveOperatorButton(pressedButton);
    equation[1] = pressedButton;
}

function handleAlteratorButton(pressedButton) {
    if (equation[2] == '') {
        result = equation[0];
        changeFirstNum = true;
    } else {
        result = equation[2];
        changeFirstNum = false;
    }
    if (checkFirstButton(equation)) {
        result = 0;
    } else {
        switch (pressedButton) {
            case ".":
                if (!(result.includes("."))) {
                    result = result + ".";
                } 
                break;
            case "%":
                if (!(result.includes("."))) {
                    result = Number(result) * 0.01;
                }
                break;
            case "±":
                if (!(result.includes("-"))) {
                    result = "-" + result;
                } else {
                    result = result.substring(1);
                }
                break;
        }
    }
    
    if (changeFirstNum) {
        equation[0] = result;
    } else {
        equation[2] = result;
    }
    setCalculatorDisplay();
}

function changeActiveOperatorButton(pressedButton) {
    removeActiveOperatorButton();
    var newOperator = document.getElementById(pressedButton);
    newOperator.classList.toggle("operator-pressed");
    
}

function removeActiveOperatorButton() {
    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => {
        operator.classList.remove("operator-pressed");
    })
}

function canEvaluate() {
    if (equation[1] !== "" && !isNaN(equation[2])) {
        return true;
    } else {
        return false;
    }
}

function evaluateEquation() {
    num1 = Number(equation[0]);
    operator = equation[1];
    num2 = Number(equation[2]);
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "−":
            result = num1 - num2;
            break;
        case "×":
            result = num1 * num2;
            break;
        case "÷":
            result = num1 / num2;
            break;
    }
    equation = [result, '', ''];
    evaluatedBefore = true;
    setCalculatorDisplay();
}