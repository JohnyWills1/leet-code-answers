/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
// Output: [0,3]
// Explanation: It's not possible to reach all the nodes from a single vertex.
// From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].

// Add each second value from the pair to a set, this will tell you all the reachable nodes
// Any node which is not part of the set, must not be reachable from another node apart from itself.
// Therefore these two nodes must be able to reach all other nodes.

var findSmallestSetOfVertices = function (n, edges) {
	const s = new Set();
	for (const [from, to] of edges) s.add(to);

	const ans = [];
	for (let i = 0; i < n; i += 1) {
		if (!s.has(i)) ans.push(i);
	}
	return ans;
};
