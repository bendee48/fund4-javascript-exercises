const palindromes = function(str) {
  let newStr = str.toLowerCase();
  newStr = newStr.replace(/[\s.,!]/g, "");
  let reversedStr = newStr.split("").reverse().join("");
  return newStr === reversedStr
}

module.exports = palindromes
