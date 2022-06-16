// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    var x = str.split(' ')
    var y = []
    x.forEach(word => {
        let test = word[0].toUpperCase() + word.substring(1)
        y.push(test)
    })

    console.log(y.join(' '))
}

capitalize('a short sentence')

module.exports = capitalize;
