/**
 * @param {number[]} arr
 * @return {number}
 */

// First total the values in the array:
// Current value + previous value, starting at the second index.
// This will give you a running total of the elements in the array.

//Then loop through the array, s = start increment each loop
// e = end, increment by 2 each loop (as to keep it searching for odd length subarrays)
// Find the sum of these values, where the end - start (unless start is null then 0)

var sumOddLengthSubarrays = function (arr) {
	let out = 0;

	for (i = 1; i < arr.length; i++) {
		arr[i] += arr[i - 1];
	}

	const findSum = (s, e) => {
		return arr[e] - (arr[s - 1] || 0);
	};

	for (s = 0; s < arr.length; s++) {
		for (e = s; e < arr.length; e += 2) {
			out += findSum(s, e);
		}
	}

	return out;
};
