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

function chunk(array, size) {
  let chunks = [];
  for (var i = 0; i < array.length; i = i + size) {
    let chunk = [...array].splice(i, size); //does not splice array, but a copy of the array. hence the [...array]
    chunks.push(chunk);
  }
  console.log(chunks);
}

chunk([1, 2, 3, 4, 5], 2);