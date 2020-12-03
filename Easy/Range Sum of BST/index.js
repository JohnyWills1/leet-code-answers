/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Create a Depth First Search function, then pass the root node into it.
// This will recursively call the DFS on either the left or right node, depending
// if the current value is within the low and high variables.
// If the value is within the variables add this to the running counter.

var rangeSumBST = function (root, low, high) {
	let output = 0;

	const dfs = (node) => {
		if (node) {
			if (node.val <= high && node.val >= low) {
				output += node.val;
			}
			if (low < node.val) {
				dfs(node.left);
			}
			if (node.val < high) {
				dfs(node.right);
			}
		}
	};

	dfs(root);

	return output;
};
