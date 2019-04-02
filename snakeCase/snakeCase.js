const snakeCase = function(str) {
  let words = str.match(/[a-z]+|[A-Z]{1}[a-zA-Z]+/g)
  let snakeWords = words
                      .map(item => item.toLowerCase())
                      .join("_");
  return snakeWords;
}

module.exports = snakeCase
