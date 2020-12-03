/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Loop through the array of numbers, 1 counter at the start and 1 at the value of n.
// Push each of these values to a new array.

var shuffle = function (nums, n) {
	let newArr = [];

	for (i = 0, x = n; i < n; i++) {
		newArr.push(nums[i]);
		newArr.push(nums[x]);
		x++;
	}

	return newArr;
};
