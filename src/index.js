module.exports = function toReadable(a) {
	let simple = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ''];
	let twenties = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', ''];
	let tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ''];
	let more = ['', 'hundred', 'thousand'];


	let b = String(a).length;
	let c = String(a).split('');

	// простые числа
	if (b == 1) {
		return simple[a];
	}

	// от 10 до 99
	else if (b == 2) {
		if (a < 20) {
			return twenties[Number(c[1]) + 1];
		} else {
			if (c[1] == 0) {
				return tens[Number(c[0]) - 1];
			} else {
				return tens[Number(c[0]) - 1] + ' ' + simple[Number(c[1])];
			}
		}
	}

	// от 100 до 999

	else if (b == 3) {

		if (c[1] == 0) {
			return simple[Number(c[0])] + ' ' + more[1] + ' ' + simple[Number(c[2])];
		}
		else if (c[2] == 0) {
			if (c[1] == 1) {
				return simple[Number(c[0])] + ' ' + more[1] + ' ' + twenties[Number(c[1])];
			} else {
				return simple[Number(c[0])] + ' ' + more[1] + ' ' + tens[Number(c[1]) - 1];
			}
		}
		else if (c[1] < 2) {
			return simple[Number(c[0])] + ' ' + more[1] + ' ' + twenties[Number(c[2]) + 1];
		} else {
			return simple[Number(c[0])] + ' ' + more[1] + ' ' + tens[Number(c[1]) - 1] + ' ' + simple[Number(c[2])];
		}
	}

	// от 1000 до 9999

	else if (b == 4) {
		if (c[1] == 0 && c[2] == 0 && c[3] == 0) {
			return simple[Number(c[0])] + ' ' + more[2];
		}

		else if (c[1] == 0 && c[2] == 0) {
			return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[3])];
		}

		else if (c[2] == 0 && c[3] == 0) {
			return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[1])] + ' ' + more[1];
		}

		else if (c[1] == 0 && c[3] == 0) {
			return simple[Number(c[0])] + ' ' + more[2] + ' ' + tens[Number(c[2]) - 1];
		}

		else if (c[1] == 0) {
			if (String(a)[3] >= 2) {
				return simple[Number(c[0])] + ' ' + more[2] + ' ' + tens[Number(c[2]) - 1] + ' ' + simple[Number(c[3])];
			} else {
				return simple[Number(c[0])] + ' ' + more[2] + ' ' + twenties[Number(c[2]) + 1];
			}

		}

		else if (c[2] == 0) {
			return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[1])] + ' ' + more[1] + ' ' + simple[Number(c[3])];
		}

		else if (c[3] == 0) {
			if (c[2] == 1) {
				return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[1])] + ' ' + more[1] + ' ' + twenties[Number(c[2])];
			} else {
				return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[1])] + ' ' + more[1] + ' ' + tens[Number(c[2]) - 1];
			}
		}
		else {
			if (String(a)[3] >= 2) {
				return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[1])] + ' ' + more[1] + ' ' + tens[Number(c[2]) - 1] + ' ' + simple[Number(c[3])];
			} else {
				return simple[Number(c[0])] + ' ' + more[2] + ' ' + simple[Number(c[1])] + ' ' + more[1] + ' ' + twenties[Number(c[2]) + 1];
			}
		}

	}
}
