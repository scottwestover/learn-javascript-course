// For Loop
const myArray = [1, 2, 3];

// for
for (let i = 0; i < myArray.length; i++) {
  console.log('i', i);
  console.log(myArray[i]);
}

// for/in: properties of object
const obj = { test1: '1', test2: 2, test3: [] };
for (let prop in obj) {
  console.log(prop, obj[prop]);
}

// for/of: values of an iterable object
for (let x of myArray) {
  console.log(x);
}

for (let x of 'hi there') {
  console.log(x);
}
