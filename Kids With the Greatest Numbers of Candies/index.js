/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// Find the largest possible number in the array of numbers
// If the current number + extraCandies is greater than or equal to the largest number
// push true to the array of booleans

var kidsWithCandies = function (candies, extraCandies) {
	let ln = 0;

	const largestPossNum = (el) => {
		if (el > ln) {
			ln = el;
		} else {
			return;
		}
	};

	let outArr = [];

	const createOutArr = (el, extra) => {
		if (el + extra >= ln) {
			outArr.push(true);
			return;
		} else {
			outArr.push(false);
			return;
		}
	};

	// Find the greatest number of candies
	candies.forEach((el) => largestPossNum(el));

	// Create the boolean array
	candies.forEach((el) => createOutArr(el, extraCandies));

	return outArr;
};
