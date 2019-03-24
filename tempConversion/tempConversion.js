const ftoc = function(temp) {
  let result = (temp - 32) * 5/9;
  return +result.toFixed(1);
}

const ctof = function(temp) {
  let result = (temp * 9/5) + 32;
  return +result.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
