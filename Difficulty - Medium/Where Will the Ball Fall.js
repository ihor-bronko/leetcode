// 1706. Where Will the Ball Fall

const findBall = grid => {
	let ans = new Array(grid[0].length).fill(0)

	const dfs = (i, j) => {
		if (i === grid.length) return j
		if (j < 0 || j >= grid[0].length) return -1
		if (grid[i][j] === 1 && j + 1 < grid[0].length && grid[i][j + 1] === 1) {
			return dfs(i + 1, j + 1)
		} else if (grid[i][j] === -1 && j - 1 >= 0 && grid[i][j - 1] === -1) {
			return dfs(i + 1, j - 1)
		}
		return -1
	}

	for (let j = 0; j < grid[0].length; j++) {
		ans[j] = dfs(0, j)
	}
	return ans
}
