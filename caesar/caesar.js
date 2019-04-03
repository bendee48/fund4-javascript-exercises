const caesar = function(str, num) {
  let newString = "";
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  for (i = 0; i < str.length; i++) {
    //checks for non letters eg spaces, commas
    if (str[i].match(/[,.!?\s]/g)) {
      newString += str[i];
      continue;
    }
    //Checks for minus cases and index going over 26
    let index = alphabet.indexOf(str[i].toLowerCase()) + num;
    if (index > 0) {
      index = index % 26;
    } else {
      index = index + 26;
    }

    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[index].toUpperCase();
    } else {
      newString += alphabet[index];
    }
  }
  return newString;
}

module.exports = caesar
