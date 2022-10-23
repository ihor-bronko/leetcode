// 145. Binary Tree Postorder Traversal

const postorderTraversal = root => {
	const walk = (node, result) => {
		if (node === null) return []
		walk(node.left, result)
		walk(node.right, result)

		result.push(node.val)
		return result
	}
	return walk(root, [])
}
