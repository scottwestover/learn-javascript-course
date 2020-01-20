// Array Methods
const array1 = [1, 2, 3];
const array2 = ['hi', 'bye'];

// toString(), join()
console.log(array1.toString());
console.log(array2.toString());

console.log(array1.join('!'));
console.log(array2.join(' '));

// push()
let len = array1.push(4);
console.log(len);
console.log(array1);

// pop()
len = array1.pop();
console.log(len);
console.log(array1);

// shift()
console.log(array1.shift());
console.log(array1);

// unshift()
console.log(array1.unshift(1));
console.log(array1);

// delete: not recommended
// delete array1[0];
// console.log(array1);

// splice()
let items = array1.splice(1, 0, 4, 5, 6);
console.log(array1);
console.log(items);
items = array1.splice(1, 2, 7, 8);
console.log(array1);
console.log(items);

// concat()
const myArray = array1.concat(array2, items);
console.log(myArray);
console.log(array1);

// slice()
const myArray2 = array1.slice(2, 5);
console.log(myArray2);
console.log(array1);
const myArray3 = array1.slice(3);
console.log(myArray3);
console.log(array1);
