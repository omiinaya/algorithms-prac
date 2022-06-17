function anagrams(stringA, stringB) {
    var x = stringA.split('').sort().join('')
    var y = stringB.split('').sort().join('')
    if (x != y) return false
    return true
}

function capitalize(str) {
    var x = []
    str.split(' ').forEach(word => {
        x.push(word[0].toUpperCase() + word.substring(1))
    })
    return x.join(' ')
}

function chunk(array, size) {
    var chunks = []
    for (var i = 0; i < array.length; i = i + size) {
        var chunk = [...array].splice(i, size)
        chunks.push(chunk)
    }
    return chunks
}

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        const fizz = (i % 3 === 0)
        const buzz = (i % 5 === 0)
        if (fizz && buzz) console.log('fizzbuzz');
        else if (fizz) console.log('fizz')
        else if (buzz) console.log('buzz')
        else console.log(i)
    }
}