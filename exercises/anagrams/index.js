// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let charMap1 = {}
    let charMap2 = {}

    stringA.split('').forEach(char => {
        charMap1[char] = charMap1[char] + 1 || 1
    })

    stringB.split('').forEach(char => {
        charMap2[char] = charMap2[char] + 1 || 1
    })

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false;
        }
    }

    return true;
}

anagrams('One one', 'One one c')
//anagrams('rail safety', 'fairy tales')

module.exports = anagrams;
