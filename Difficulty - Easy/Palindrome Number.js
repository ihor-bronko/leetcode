// 9. Palindrome Number

const isPalindrome = (x) => {
  let reversedStr = ''
  let xStr = x.toString()

  for (let i of xStr) {
    reversedStr = i + reversedStr
  }
  return reversedStr === xStr
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(-10))
