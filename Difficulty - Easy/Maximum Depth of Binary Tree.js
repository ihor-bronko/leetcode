// 104. Maximum Depth of Binary Tree

const maxDepth = root => {
	if (!root) return 0
	return 1 + Math.max(maxDepth(root.right), maxDepth(root.left))
}
