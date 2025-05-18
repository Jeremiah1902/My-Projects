let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '0' && display.value === '0') return;
    display.value = display.value.toString() + number.toString();
}

function clearDisplay() {
    display.value = '';
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}

function operation(op) {
    if (display.value === '') return;
    if (currentOperand !== '') calculateResult();
    operation = op;
    previousOperand = display.value;
    display.value = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(display.value);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    display.value = result;
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}