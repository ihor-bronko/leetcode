// 136. Single Number

const singleNumber = nums => {
	const ht = {}

	for (let htElement of nums) {
		ht[htElement] = ht[htElement] + 1 || 1
	}
	for (let htKey in ht) {
		if (ht[htKey] === 1) return htKey
	}
}

console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([1]))
