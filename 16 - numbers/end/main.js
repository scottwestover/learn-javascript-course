// Numbers
let num = 0;
console.log(num);

// decimals
num = 1.3333;
console.log(num);

// scientific (exponent) notation
num = 1234e5;
console.log(num);

// Methods
// toString()
num = 1234;
console.log(num.toString());
console.log(num);

// toExponential()
num = 10.567
console.log(num.toExponential());
console.log(num.toExponential(2));

// toFixed()
console.log(num.toFixed());
console.log(num.toFixed(0));
console.log(num.toFixed(2));
console.log(num.toFixed(9));

// toPrecision()
console.log(num.toPrecision());
console.log(num.toPrecision(1));
console.log(num.toPrecision(2));
console.log(num.toPrecision(9));

// Global methods for converting to numbers
// Number(), parseInt(), parseFloat()
num = Number('35');
console.log(num);
num = Number('Num');
console.log(num);

num = parseInt('35.5');
console.log(num);
num = parseInt('Num');
console.log(num);

num = parseFloat('35.5');
console.log(num);
num = parseFloat('Num');
console.log(num);
