// 70. Climbing Stairs

const climbStairs = n => {
	const num = [1, 1, 2]
	for (let i = 3; i <= n; i++) {
		num[i] = num[i - 1] + num[i - 2]
	}
	return num[n]
}

console.log(climbStairs(2))
console.log(climbStairs(1))
console.log(climbStairs(3))
console.log(climbStairs(4))
