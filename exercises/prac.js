function anagrams(stringA, stringB) {
  let x = stringA.toLowerCase().split("").sort().join("");
  let y = stringB.toLowerCase().split("").sort().join("");
  if (x != y) return false;
  return true;
}

console.log(anagrams("Bob", "bbo"));

function capitalize(sentence) {
  let str = sentence.split(" ");
  let newStr = [];
  str.forEach((word) => {
    let cap = word[0].toUpperCase() + word.substring(1);
    newStr.push(cap);
  });
  return newStr.join(" ");
}

console.log(capitalize("a short sentence"));

function reverseInt(num) {
  let str = num.toString().split("").reverse().join("");
  let rev = parseInt(str) * Math.sign(num);
  return rev;
}

console.log(reverseInt(-31));
/*
function chunk(array, size) {
  let chunks = [];
  for (var i = 0; i < array.length; i = i + size) {
    let chunk = [...array].splice(i, size); //does not splice array, but a copy of the array. hence the [...array]
    chunks.push(chunk);
  }
  console.log(chunks);
}

chunk([1, 2, 3, 4, 5], 2);
*/
function steps(n) {
  for (var i = 1; i <= n; i++) {
    let x = "#";
    let y = x.repeat(i);
    //let z = y.padEnd(n, " ");
    console.log(y);
  }
}

steps(12);
/*
function chunks(array, size) {
  let chunks = [];
  for (var i = 0; i < array.length; i = i + size) {
    let chunk = [...array].splice(i, size);
    chunks.push(chunk);
  }
  return chunks;
}
*/
console.log(chunks([1, 2, 3, 4, 5], 2));

function fizzBuzz(n) {
  for (var i = 1; i <= n; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;
    if (fizz && buzz) console.log("fizzBuzz");
    else if (fizz) console.log("fizz");
    else if (buzz) console.log("buzz");
    else console.log(i);
  }
}

fizzBuzz(10);

function reverse(str) {
  return str.split("").reverse().join("");
}

function chunks(array, size) {
  let chunks = [];
  for (var i = 0; i < array.length; i = i + size) {
    let chunk = [...array].splice(i, size);
    chunks.push(chunk);
  }
  console.log(chunks);
}

chunks([1, 2, 3, 4, 5], 2);
