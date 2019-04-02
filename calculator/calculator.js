function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numArr) {
	let result = numArr.reduce((total, item) => {
		return total += item;
	}, 0);
	return result;
}

function multiply (numArr) {
	let result = numArr.reduce((total, item) => {
		return total *= item;
	});
	return result;
}

function power(num1, num2) {
	return num1 ** num2;
}

function factorial(num) {
	let arr = [];
	if (num == 0) return 1;
	for (i = num; i > 0; i--) {
		arr.push(i)
	}
 	let result = arr.reduce((total, item) => {
		return total *= item;
	});
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
