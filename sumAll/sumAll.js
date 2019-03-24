const sumAll = function(num1, num2) {
  let sum_array = [];
  let start = num1;
  let end = num2;

  if (num1 > num2){
    start = num2;
    end = num1;
  }

  if (num1 < 0 || num2 < 0) return "ERROR";
  if (typeof num1 !== "number" || typeof num2 !== "number" ) return "ERROR";

  for (start; start <= end; start++){
    sum_array.push(start)
  }
  return sum_array.reduce((sum, item) => sum + item, 0);
}

module.exports = sumAll
