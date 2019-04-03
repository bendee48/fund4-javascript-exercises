const fibonacci = function(num) {
  if (num < 0) return "OOPS"
  num = +num;
  const arr = [1,1];
  for (i = 0; i < num-2; i++) {
    let endOfArray = arr.slice(-2);
    [num1, num2] = endOfArray;
    let sum = num1 + num2;
    arr.push(sum)
  }
  return arr.pop();
}

module.exports = fibonacci
