function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));

function reverse2(str) {
  let reverse = [];
  for (var i = 0; i < str.length; i++) {
    reverse.push(str[str.length - 1 - i]);
  }
  return reverse.join("");
}

console.log(reverse2("how are you"));

function reverse3(str) {
  let newStr = "";
  for (var i = 0; i < str.length; i++) {
    newStr = newStr + str[str.length - 1 - i];
  }
  return newStr;
}

console.log(reverse2("i am fine thanks"));

function reverse4(str) {
  let words = str.split(" ");
  let sentence = [];

  for (var i = 0; i < words.length; i++) {
    let newStr = "";
    for (var j = 0; j < words[i].length; j++) {
      newStr = newStr + words[i][words[i].length - 1 - j];
    }
    sentence.push(newStr);
  }
  return sentence.join(" ");
}

console.log(reverse4("hello my name is omar"));

function findNum(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
}

console.log(findNum([1, 2, 2, 2, 2, 2, 2, 3, 4], 2));

function findNum2(array, target) {
  let first = "";
  let last = "";
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      if (array[i - 1] != target && array[i] === target) first = i;
      if (array[i] === target && array[i + 1] != target) last = i;
    }
  }
  let arr = [first, last];
  console.log(arr);
  return arr;
}

findNum2([1, 2, 2, 2, 2, 2, 2, 3, 4], 2);
