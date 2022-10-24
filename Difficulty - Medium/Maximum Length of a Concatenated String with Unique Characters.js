// 1239. Maximum Length of a Concatenated String with Unique Characters

function maxLength(arr) {
	let res = 0

	let dfs = (ds, path) => {
		if (new Set(path).size !== path.length) return

		res = Math.max(res, path.length)

		for (let i = 0; i < ds.length; i++) {
			dfs(ds.slice(i + 1), path + ds[i])
		}
	}
	dfs(arr, '')

	return res
}
