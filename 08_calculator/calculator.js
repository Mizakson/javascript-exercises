const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((a,b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
	var result = num;
  if (num === 0 | num === 1) {
    return 1;
  }
  while (num > 1) {
    num--;
    result *= num;
  }
  return result;
  
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
