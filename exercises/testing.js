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

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}

function chunk(array, size) {
    var chunks = []
    for (var i = 0; i < array.length; i = i + size) {
        var chunk = [...array].splice(i, size)
        chunks.push(chunk)
    }
    return chunks
}

function steps(n) {
    for (var i = 1; i <= n; i++) {
        var x = '#'
        var y = x.repeat(i)
        var z = y.padEnd(n, " ")
        console.log(z)
    }
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

function reverse(str) {
    return str.split('').reverse().join('')
}

function vowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let chars = str.split('')
    let x = vowels.filter(item => chars.includes(item))
    console.log(x.length)
    return x.length
}

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let x = ' '.repeat(n - i);          //total spaces - current amount of #
        let y = '#'.repeat(i * 2 - 1)       //amount of blocks necessary for each step
        console.log(x + y + x);
    }
}

function maxChar(str) {
    let charMap = {}
    let max = 0
    let maxChar = ''

    str.split('').forEach(char => {
        charMap[char] = charMap[char] + 1 || 1;
    })

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char] //increment max when new max found
            maxChar = char //update maxChar when new one found
        }
    }

    console.log(maxChar)
    return maxChar
}