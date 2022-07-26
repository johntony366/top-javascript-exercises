const sum = function(arr) {
  let sum = 0;
  return arr.reduce((sum, num) => num + sum, sum);
};

const subtract = function(a, b) {
  return a - b;
	
};

const add = function(a, b) {
  return a + b;
};

const multiply = function(args) {
  let product = 1;
  return args.reduce((product, num) => product * num, product);
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(n) {
  if (n == 0) return 1;
  return n*factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
