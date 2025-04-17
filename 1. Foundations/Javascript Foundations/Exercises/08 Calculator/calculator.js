const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// THE ODIN SOLUTION
const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(a, b) {
  a * b;
};

const power = function(a, b) {
	return a ** b;
};

// THE ODIN SOLUTION
// const power = function (a, b) {
//   return Math.pow(a, b);
// };

const factorial = function(n) {
	let total = 1;
  for (let i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
};

// THE ODIN SOLUTION
// const factorial = function (n) {
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
