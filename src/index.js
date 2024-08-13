const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	let result = "";

	for (let i = 0; i < expr.length / 10; i++) {
		let stringCharMorse = "";
		let exprChar = expr.slice(i * 10, i * 10 + 10);

		if (exprChar === '**********') {
			result += ' ';
			continue;
		}

		let exprCharInt = parseInt(exprChar);

		while (exprCharInt !== 0) {
			if (exprCharInt % 100 === 10) {
				stringCharMorse = '.' + stringCharMorse;

			} else if (exprCharInt % 100 === 11) {
				stringCharMorse = '-' + stringCharMorse;
			}
			exprCharInt = Math.floor(exprCharInt / 100);
		}
		result +=  MORSE_TABLE[stringCharMorse];
	}
	return result;
}


module.exports = {
	decode
}
