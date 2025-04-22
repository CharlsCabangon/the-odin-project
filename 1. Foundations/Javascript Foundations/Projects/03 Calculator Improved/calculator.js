
/*
	1. ADD DECIMAL HANDLING
	2. add keyboard support
	3. could use more DRY (?)
*/

const calculatorState = {
	firstNumber: null,
	secondNumber: null,
	operator: null,
	isSecondNumberActive: false,
}

let calcDisplay = document.getElementById("display");

function handleNumber(number) {
	let state = calculatorState;

	if (!state.isSecondNumberActive) {
		state.firstNumber = (state.firstNumber || "") + number;
		updateDisplay(state.firstNumber);

		console.log(state);
	}
	else {
		state.secondNumber = (state.secondNumber || "") + number;
		updateDisplay(`${state.firstNumber}${state.operator}${state.secondNumber}`);

		console.log(state);
	}
}

function handleOperator(operator) {
	let state = calculatorState;

	if(state.firstNumber && !state.isSecondNumberActive) {
		state.operator = operator;
		state.isSecondNumberActive = true;
		updateDisplay(`${state.firstNumber}${state.operator}`);

		console.log(state);
	}
}

function handleEquals() {
	let state = calculatorState;

	if (state.firstNumber && state.operator && state.secondNumber) {

		let result = calculate(
			parseFloat(state.firstNumber),
			parseFloat(state.secondNumber),
			state.operator
		);

		updateDisplay(result);

		state.firstNumber = result;
		state.secondNumber = null;
		state.operator = null;
		state.isSecondNumberActive = false;
	}
}

// GPT suggests to put decimal handling
function handleDecimal() {
	let state = calculatorState;

	if (!state.isSecondNumberActive) {
		if (!state.firstNumber.includes(".")) {
			state.firstNumber = (state.firstNumber || "0") + ".";
			updateDisplay(state.firstNumber);
		}
	}
	else {
		if (!state.secondNumber.includes(".")) {
			state.secondNumber = (state.secondNumber || "0") + ".";
			updateDisplay(`${state.firstNumber}${state.operator}${state.secondNumber}`);
		}
	}
}

function calculate(a, b, operator) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "×":
			return a * b;
		case "÷":
			return b === 0 ? "error" : a / b; // if there's no " b === 0 ? 'error' ", the result will be infinity every time b = 0
		case "%":
			return a % b;
		default:
			return "error";
	}
}

function allClear() {
	let state = calculatorState;

	state.firstNumber = null;
	state.secondNumber = null;
	state.operator = null;
	state.isSecondNumberActive = false;

	console.log(state);

	updateDisplay("");
}

function backSpace() {
	let state = calculatorState;

	if (!state.isSecondNumberActive) {
		state.firstNumber = state.firstNumber.slice(0, -1);
		updateDisplay(state.firstNumber || "")

		console.log(state.firstNumber);
	}
	else if (state.secondNumber) {
		state.secondNumber = state.secondNumber.slice(0, -1);
		updateDisplay(`${state.firstNumber}${state.operator}${state.secondNumber || ""}`)

		console.log(state.secondNumber);
	}
	else {
		state.operator = null;
		updateDisplay(state.firstNumber || ""); // using || "" so that the UI won't display null/undefined if there is no firsNumber
		state.isSecondNumberActive = false;

		console.log(state.operator);
	}
}

function updateDisplay(content) {
	calcDisplay.textContent = content;
}

document.querySelectorAll(".btn-number").forEach(button => {
    button.addEventListener('click', () => handleNumber(button.textContent));
});

document.querySelectorAll(".btn-operator").forEach(button => {
	button.addEventListener('click', () => handleOperator(button.textContent));
})

document.getElementById("btn-equals").addEventListener('click', () => {
	handleEquals();
})

document.getElementById("btn-ac").addEventListener('click', () => {
	allClear();
})

document.getElementById("btn-c").addEventListener('click', () => {
	backSpace();
})

document.getElementById("btn-dot").addEventListener('click', () => {
	handleDecimal();
})