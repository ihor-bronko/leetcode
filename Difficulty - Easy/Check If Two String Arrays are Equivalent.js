// 1662. Check If Two String Arrays are Equivalent

const arrayStringsAreEqual = (word1, word2) => {
	return word1.join('') === word2.join('')
}

console.log(arrayStringsAreEqual(['ab', 'c'], ['a', 'bc']))
