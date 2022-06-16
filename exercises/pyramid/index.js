// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let i = 1; i <= n; i++) {
        let x = ' '.repeat(n - i);          //total spaces - current amount of #
        let y = '#'.repeat(i * 2 - 1)       //amount of blocks necessary for each step
        console.log(x + y + x);
    }
}

pyramid(5);

module.exports = pyramid;
