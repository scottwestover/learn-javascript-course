// Arrays
// create array: var arrayName = [item1, item2, ...];
const array = [1, 2, 3, '4', { test: 'test' }, function () { console.log('hi'); }];
console.log(array);

// access elements of an array
console.log(array[0]);

// changing values in an array
array[0] = 4;
console.log(array[0]);
array[0] = 'test';
console.log(array[0]);

// how to know if a variable is an array
// Array.isArray()
console.log(Array.isArray(array));

// arrayName instanceof Array
console.log(array instanceof Array);

// .length
console.log(array.length);

// adding elements: push(), .length, index
array.push('5');
console.log(array.length);
console.log(array);

array[array.length] = '7';
console.log(array.length);
console.log(array);

array[10] = '10';
console.log(array.length);
console.log(array);
