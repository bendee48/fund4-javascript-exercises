const repeatString = function(string, number) {
  let repeatedString = "";
  for (let i = 0; i < number; i++) {
    repeatedString += string;
  }
  if (number < 0) { repeatedString = "ERROR"}
  return repeatedString;
}

module.exports = repeatString
