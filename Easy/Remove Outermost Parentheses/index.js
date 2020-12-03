/**
 * @param {string} S
 * @return {string}
 */
// First find the number of ( and ) brackets, if they are equal then this will be the first seperate string
// Then loop through the seperate string list, removing the first and last value from the current string.
// Finally join the array back together using '' as the seperator. This creates a string with no spaces.
var removeOuterParentheses = function (S) {
	let openBracket = 0;
	let closeBracket = 0;
	let stringSep = [];
	let stringLen = 0;
	let start = 0;
	let finalString = '';
	let finalArr = [];

	for (i = 0; i < S.length; i++) {
		if (S[i] === '(') {
			openBracket++;
		} else if (S[i] === ')') {
			closeBracket++;
		}
		if (openBracket === closeBracket) {
			stringSep.push(S.slice(start, i + 1));
			start = i + 1;
		}
	}

	for (x = 0; x < stringSep.length; x++) {
		stringLen = stringSep[x].length;
		finalArr.push(stringSep[x].slice(1, stringLen - 1));
	}

	return (finalString = finalArr.join(''));
};
