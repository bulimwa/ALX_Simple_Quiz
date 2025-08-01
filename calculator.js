// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Cannot divide by zero';
    }
    return number1 / number2;
}

// Get elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

// Event Listeners
document.getElementById('add').addEventListener('click', function () {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = add(num1, num2);
});

document.getElementById('subtract').addEventListener('click', function () {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = subtract(num1, num2);
});

document.getElementById('multiply').addEventListener('click', function () {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = multiply(num1, num2);
});

document.getElementById('divide').addEventListener('click', function () {
    const num1 = parseFloat(number1Input.value) || 0;
    const num2 = parseFloat(number2Input.value) || 0;
    resultDisplay.textContent = divide(num1, num2);
});

