// 94. Binary Tree Inorder Traversal

const inorderTraversal = root => {
	let result = []
	const traverse = node => {
		if (node === null) return
		if (node.left) traverse(node.left)
		result.push(node.val)
		if (node.right) traverse(node.right)
	}
	traverse(root)
	return result
}

console.log(inorderTraversal([1, null, 2, 3]))
