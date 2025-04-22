
// PRACTICE DRY (DON'T REPEAT YOURSELF) IMPROVE CODE!!!

let firstNumber = [];
let secondNumber = [];
let operator;

let calcDisplay = document.getElementById("display")

// Button variables for numbers
let btn0 = document.getElementById("btn-0");
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");
let btn7 = document.getElementById("btn-7");
let btn8 = document.getElementById("btn-8");
let btn9 = document.getElementById("btn-9");
let btnDot = document.getElementById("btn-dot");

// Button variables for operators
let btnAdd = document.getElementById("btn-add");
let btnSubtract = document.getElementById("btn-subtract");
let btnMultiply = document.getElementById("btn-multiply");
let btnDivide = document.getElementById("btn-divide");
let btnModulo = document.getElementById("btn-modulo")
let btnEquals = document.getElementById("btn-equals");

// Button variables for functions
let btnAC = document.getElementById("btn-ac");
let btnC = document.getElementById("btn-c");
let btnBack = document.getElementById("btn-back");

// Button event listeners for numbers
btn0.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(0);
		
		calcDisplay.innerHTML += "0";
		// console.log(secondNumber);
	}
	else {
		secondNumber.push(0);

		calcDisplay.innerHTML += "0";
		// console.log(secondNumber);
	}
})
btn1.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(1);
		
		calcDisplay.innerHTML += "1";
	}
	else {
		secondNumber.push(1);

		calcDisplay.innerHTML += "1";
	}
})

btn2.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(2);
		
		calcDisplay.innerHTML += "2";
	}
	else {
		secondNumber.push(2);

		calcDisplay.innerHTML += "2";
	}
})

btn3.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(3);
		
		calcDisplay.innerHTML += "3";
	}
	else {
		secondNumber.push(3);

		calcDisplay.innerHTML += "3";
	}
})

btn4.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(4);
		
		calcDisplay.innerHTML += "4";
	}
	else {
		secondNumber.push(4);

		calcDisplay.innerHTML += "4";
	}
})

btn5.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(5);
		
		calcDisplay.innerHTML += "5";
	}
	else {
		secondNumber.push(5);

		calcDisplay.innerHTML += "5";
	}
})

btn6.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(6);
		
		calcDisplay.innerHTML += "6";
	}
	else {
		secondNumber.push(6);

		calcDisplay.innerHTML += "6";
	}
})

btn7.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(7);
		
		calcDisplay.innerHTML += "7";
	}
	else {
		secondNumber.push(7);

		calcDisplay.innerHTML += "7";
	}
})

btn8.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(8);
		
		calcDisplay.innerHTML += "8";
	}
	else {
		secondNumber.push(8);

		calcDisplay.innerHTML += "8";
	}
})

btn9.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(9);
		
		calcDisplay.innerHTML += "9";
	}
	else {
		secondNumber.push(9);

		calcDisplay.innerHTML += "9";
	}
})

btnDot.addEventListener('click', () => {
	if (!operator) {
		firstNumber.push(".");
		
		calcDisplay.innerHTML += ".";
	}
	else {
		secondNumber.push(".");

		calcDisplay.innerHTML += ".";
	}
})

// Button event listeners for operators
btnAdd.addEventListener('click', () => {
	if (!operator) {
		operator = "+";

		calcDisplay.innerHTML += "+";
	}
	// if (operator) {
	// 	btnAdd.disabled = true;
	// } //use FOR EACH later or BETTER is disable the event listener na lang
})

btnSubtract.addEventListener('click', () => {
	if (!operator) {
		operator = "-";

		calcDisplay.innerHTML += "-";
	}
})

btnMultiply.addEventListener('click', () => {
	if (!operator) {
		operator = "x";

		calcDisplay.innerHTML += "x";
	}
})

btnDivide.addEventListener('click', () => {
	if (!operator) {
		operator = "÷";

		calcDisplay.innerHTML += "÷";
	}
})

btnModulo.addEventListener('click', () => {
	if (!operator) {
		operator = "%";

		calcDisplay.innerHTML += "%";
	}
})

// Button event listeners for functions
btnAC.addEventListener('click', () => {
	firstNumber = [];
	secondNumber = [];
	operator = null;

	// console.log(firstNumber);
	// console.log(secondNumber);
	// console.log(operator);

	calcDisplay.innerHTML = "";
})

btnC.addEventListener('click', () => {
	if (!operator) {
		firstNumber.pop();
		console.log("First number: " + firstNumber);
	}
	else if (secondNumber.length > 0) {
		secondNumber.pop();
		console.log("Second number: " + secondNumber);
	}
	else {
		operator = null;
		console.log("Operator: " + operator);
	}

	calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, -1);
})

// FUNCTIONS!!!
function firstOperand() {
	let firstOperand = parseFloat(firstNumber.join(""));

	return firstOperand;
}

function secondOperand() {
	let secondOperand = parseFloat(secondNumber.join(""));

	return secondOperand;
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function modulo(a, b) {
	return a % b;
}

btnEquals.addEventListener('click', () => {
	if (operator === "+") {
		let sum = add(firstOperand(), secondOperand());

		calcDisplay.innerHTML = sum;
		firstNumber = [sum];
		secondNumber = [];
		operator = null;
	}
	else if (operator === "-") {
		let difference = subtract(firstOperand(), secondOperand());

		calcDisplay.innerHTML = difference;
		firstNumber = [difference];
		secondNumber = [];
		operator = null;
	}
	else if (operator === "x") {
		let product = multiply(firstOperand(), secondOperand())

		calcDisplay.innerHTML = product;
		firstNumber = [product];
		secondNumber = [];
		operator = null;
	}
	else if (operator === "÷") {
		let quotient = divide(firstOperand(), secondOperand());

		calcDisplay.innerHTML = quotient;
		firstNumber = [quotient];
		secondNumber = [];
		operator = null;
	}
	else if (operator === "%") {
		let remainder = modulo(firstOperand(), secondOperand());

		calcDisplay.innerHTML = remainder;
		firstNumber = [remainder];
		secondNumber = [];
		operator = null;
	}
})

