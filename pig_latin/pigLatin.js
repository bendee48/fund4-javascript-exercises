function translate(str) {
	const words = str.split(" ");
	let new_word = "";
	for (i = 0; i < words.length; i++) {
		if (/[aeiou]/.test(words[i][0])) new_word += words[i] + "ay ";
		if (/[^aeiou]*qu/.test(words[i])) {
			new_word += words[i].replace(/([^aieou]*qu)([aeiou]\w+)/, `$2$1` + "ay ")
		} else if (/[^aioue]/.test(words[i][0])) {
			new_word += words[i].replace(/([^aeiou]+)([aioue]\w*)/, `$2$1`) + "ay ";
		}
	}
	return new_word.trim();
}


module.exports = {
	translate
}
