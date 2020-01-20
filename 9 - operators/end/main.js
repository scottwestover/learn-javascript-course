// assignment: =
var a;
console.log(a);
a = 5;
console.log(a);

// arithmetic: + - / * % ** ++ --
var b = 1 + 2; // 3
console.log(b);
b = b - 1;
console.log(b);
var c = 3 / 1; // 3
var d = 4 * 2; // 8
console.log(c, d);
var e = 2 ** 3; // 8
console.log(e);
e++; // 9
console.log(e);
e--; // 8
console.log(e);

// arithmetic - strings and numbers
var z = 'x' + 5;
var z2 = 'x' + 'y';
console.log(z);
console.log(z2);
var y = '5' - 1;
console.log(y);
var y2 = '&' - 1;
console.log(y2);

// additional assignment: += -=
var test = 5;
var test2 = 6;
test += test2; // 11
console.log(test);
test2 -= 1;
console.log(test2); // 5
// test2 = test2 - 1;
