// Array Iteration
const myArray = [1, 3, 5, 7, 9];

// forEach()
myArray.forEach(function(value, index, array) {
  console.log(value);
  console.log(index);
  console.log(array);
});

// map()
const myArray2 = myArray.map(function(value) {
  return value + 1;
});
console.log(myArray2);

// filter()
const myArray3 = myArray.filter(function (value) {
  return value > 5;
});
console.log(myArray3);

// reduce()
const sum = myArray.reduce(function(prev, current, index, array) {
  console.log(prev);
  console.log(current);
  console.log(index);
  console.log(array);
  return prev + current;
}, 10);
console.log(sum);

// reduceRight()

// every()

// some()

// indexOf()

// lastIndexOf()

// find()

// findIndex()
