// 88. Merge Sorted Array

const merge = (nums1, m, nums2, n) => {
	let first = m - 1
	let second = n - 1
	let i = m + n - 1

	while (second >= 0) {
		let fVal = nums1[first]
		let sVal = nums2[second]

		if (fVal > sVal) {
			nums1[i] = fVal
			i--
			first--
		} else {
			nums1[i] = sVal
			i--
			second--
		}
	}
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
