/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// Create a copy of array1.
// Loop through array2, and nest a for-loop searching through array1.
// This lets you find each occurence of the values of array2 in array1.
// Push these values to the new array in the order found.
// Then sort the array1 copy by increasing value, and filter through each value that
// is not included in the array1 copy.
// Finally concatenate the sorted array with the missing values (ordered by asc)

var relativeSortArray = function (arr1, arr2) {
	arr1Copy = [...arr1];
	newArr = [];
	finalArr = [];

	for (i = 0; i < arr2.length; i++) {
		for (x = 0; x < arr1.length; x++) {
			if (arr1[x] === arr2[i]) {
				newArr.push(arr1[x]);
			}
		}
	}

	arr1Copy.sort((a, b) => a - b);

	const result = arr1Copy.filter((num) => newArr.includes(num) == false);

	finalArr = newArr.concat(result);

	return finalArr;
};
