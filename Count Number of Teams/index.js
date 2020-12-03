let count = 0;
const rating = [2, 5, 3, 4, 1];

// Loop through the list 3 times, when the numbers are not the same and
// are in-line in the array. Check if they are increasing or decreasing
// then increment count.
// e.g (2,3,5) could be an answer if you didn't make sure that the values
// are in sequence. (2,3,5) = [0,2,1] *not in-line*

for (i = 0; i < rating.length; i++) {
	for (j = 0; j < rating.length; j++) {
		for (k = 0; k < rating.length; k++) {
			if (i != j && i != k && j != k && i < j && j < k) {
				if (rating[i] < rating[j] && rating[j] < rating[k]) {
					count++;
				}
				if (rating[i] > rating[j] && rating[j] > rating[k]) {
					count++;
				}
			}
		}
	}
}

console.log(count);
