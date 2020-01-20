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

// concat()

// slice()
