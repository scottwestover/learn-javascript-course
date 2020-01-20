// Array Sort
const numArray = [1, 100, 40, 26];
const strArray = ['a', 'z', 't', 'w'];
console.log(numArray);
console.log(strArray);

// sort()
strArray.sort();
console.log(strArray);
numArray.sort();
console.log(numArray);

// reverse()
const strArray2 = ['a', 'z', 't', 'w'];
strArray2.reverse();
console.log(strArray2);
strArray.reverse();
console.log(strArray);

// compare function
console.log(numArray);
numArray.sort(function(a, b) {
  console.log(a, b);
  return a - b;
});
console.log(numArray);
