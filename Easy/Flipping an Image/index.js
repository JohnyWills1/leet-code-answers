/**
 * @param {number[][]} A
 * @return {number[][]}
 */

// Input: [
// 	[1, 1, 0],
// 	[1, 0, 1],
// 	[0, 0, 0],
// ];
// Output: [
// 	[1, 0, 0],
// 	[0, 1, 0],
// 	[1, 1, 1],
// ];

// First reverse each sub list, then loop through each value in each list
// Flipping the values from 0 -> 1 and 1 -> 0.

var flipAndInvertImage = function (A) {
	const reverseList = (list) => {
		return list.reverse();
	};

	A.forEach((list) => reverseList(list));

	for (i = 0; i < A.length; i++) {
		for (y = 0; y < A[i].length; y++) {
			if (A[i][y] == 0) {
				A[i][y] = 1;
			} else {
				A[i][y] = 0;
			}
		}
	}

	return A;
};
