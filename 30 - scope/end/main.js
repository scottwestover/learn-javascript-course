// scope
// local
function test() {
  var x = 1;
  console.log(x);
}
test();
// console.log(x);

// global
var y = 2;
console.log(y);

function test2() {
  console.log(y);
  z = 3;
}
test2();
console.log(z);

let a = 'a';
const b = 'b';
