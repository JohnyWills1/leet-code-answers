/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Loop through the array of numbers twice, as long as you aren't using the same number twice (y!=i)
// then check the summed values are equal to the target value.
// If so add this index value to a new array, the second index is located in y, but
// can also be found by only adding the value of i as it will find this other pair in the
// next loop.

var twoSum = function (nums, target) {
	let sumAnswer = [];

	for (i = 0; i < nums.length; i++) {
		for (y = 0; y < nums.length; y++) {
			if (y != i) {
				if (nums[i] + nums[y] === target) {
					sumAnswer.push(i);
				}
			}
		}
	}

	return sumAnswer;
};
