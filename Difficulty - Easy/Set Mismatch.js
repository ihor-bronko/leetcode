// 645. Set Mismatch

const findErrorNums = nums => {
	let output = []
	for (let num of nums) {
		num = Math.abs(num)
		if (nums[num - 1] < 0) {
			output.push(num)
		} else {
			nums[num - 1] *= -1
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			output.push(i + 1)
			return output
		}
	}
}
