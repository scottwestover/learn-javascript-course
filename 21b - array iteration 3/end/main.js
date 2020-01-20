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
console.log('*********');
console.log(myArray);
const sum2 = myArray.reduceRight(function(prev, current, index, array) {
  console.log(prev);
  console.log(current);
  console.log(index);
  console.log(array);
  return prev + current;
}, 10);
console.log(sum2);

// every()
let results = myArray.every(function(value) {
  return value > 0;
});
console.log(results);

// some()
results = myArray.some(function(value) {
  console.log(value);
  return value > 1;
});
console.log(results);

// indexOf()
results = myArray.indexOf(5);
console.log(results);
results = myArray.indexOf(5, 3);
console.log(results);
results = myArray.indexOf(5, -4);
console.log(results);

// lastIndexOf()
myArray.push(5);
console.log(myArray);
results = myArray.lastIndexOf(5);
console.log(results);
results = myArray.lastIndexOf(5, -2);
console.log(results);

// find()
results = myArray.find(function(value) {
  return value > 2;
});
console.log(results);

// findIndex()
results = myArray.findIndex(function(value) {
  return value > 2;
});
console.log(results);
