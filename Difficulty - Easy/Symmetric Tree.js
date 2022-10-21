// 101. Symmetric Tree

const isSymmetric = root => {
	let res = true

	function h1(node1, node2) {
		if (!node1 && !node2) {
			return
		}
		if (!node1 || !node2 || node1.val !== node2.val) {
			res = false
			return
		}
		h1(node1.left, node2.right)
		h1(node1.right, node2.left)
	}
	h1(root, root)

	return res
}

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]))
console.log(isSymmetric([1, 2, 2, null, 3, null, 3]))
