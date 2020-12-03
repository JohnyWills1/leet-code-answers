/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

// Loop through the array 3 times, each nested for starts one position up, calculate the absolute value
// of the requested condition:
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// increment the counter if all of these conditions are true

var countGoodTriplets = function (arr, a, b, c) {
	let output = 0;

	for (i = 0; i < arr.length; i++) {
		for (j = i + 1; j < arr.length; j++) {
			for (k = j + 1; k < arr.length; k++) {
				let a1 = Math.abs(arr[i] - arr[j]);
				let b1 = Math.abs(arr[j] - arr[k]);
				let c1 = Math.abs(arr[i] - arr[k]);
				if (a1 <= a && b1 <= b && c1 <= c) {
					output++;
				}
			}
		}
	}

	return output;
};
