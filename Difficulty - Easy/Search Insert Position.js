// 35. Search Insert Position

const searchInsert = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= target) {
			return i
		}
	}
	return nums.length
}
