let N = 5;

// Recursive answer to fibonacci, works it's way down to the base case and then
// returns to the previous function calls with a value.
const fib = (N) => {
	//f(n) = f(n-1)+f(n-2)
	if (N <= 1) {
		return N;
	}

	return fib(N - 1) + fib(N - 2);
};
