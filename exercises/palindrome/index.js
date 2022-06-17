// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const parsed = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const reverse = parsed.split('').reverse().join('')
    if (parsed != reverse) return false
    return true
}

console.log(palindrome("0P"))

module.exports = palindrome;
