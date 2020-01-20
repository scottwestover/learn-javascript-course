// comparison: == === != !== > < >= <=
var a = 1;
var b = 2;
console.log(a == b);
var c = '1';
var d = '2';
console.log(c == d);
console.log(c != d);

console.log(3 > 4);
console.log(3 < 4);
console.log(3 >= 3);

// comparison - different types
console.log(a == c);
console.log(a === c);

console.log(a != c);
console.log(a !== c);

// type: typeof instanceof

// ternary: variable = (condition) ? value1:value2

// logical: && || !
var d = 1 < 10 && 2 > 3;
console.log(d);

var e = 1 < 10 || 2 > 3;
console.log(e);

console.log(d == e);
console.log(!(d == e));
