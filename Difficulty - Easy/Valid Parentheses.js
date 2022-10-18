// 20. Valid Parentheses

const isValid = s => {
	const map = { '(': ')', '{': '}', '[': ']' }
	const stack = []
	for (let stackElement of s) {
		if (map[stackElement]) {
			stack.push(map[stackElement])
		} else if (stack.length > 0 && stack[stack.length - 1] === stackElement) {
			stack.pop()
		} else {
			return false
		}
	}
	return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
