// 113. Path Sum II

const pathSum = (root, targetSum) => {
	let res = []

	function dfs(root, currSum, currArr) {
		if (root === null) return []

		currSum += root.val
		currArr.push(root.val)

		if (!root.left && !root.right && currSum === targetSum) {
			res.push([...currArr])
		}
		dfs(root.left, currSum, currArr)
		dfs(root.right, currSum, currArr)
		currArr.pop()
	}

	dfs(root, 0, [])
	return res
}
