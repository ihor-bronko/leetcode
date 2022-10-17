// 14. Longest Common Prefix

const longestCommonPrefix = strs => {
	if (strs.length === 0) return ''
	let prefix = strs[0]

	for (let i = 0; i < strs.length; i++) {
		while (strs[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1)
		}
	}
	return prefix
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']))
console.log(longestCommonPrefix(['dog', 'racecar', 'car']))
