// Conditionals
let cartTotal = 10;
const shipping = 5;
let total = 0;
console.log(total);

// if / else
if (cartTotal >= 25) {
  total = cartTotal;
} else {
  total = cartTotal + shipping;
}
console.log(total);

// else if
total = 0;
if (cartTotal >= 25) {
  total = cartTotal;
} else if (cartTotal >= 11) {
  total = cartTotal + 1;
} else if (cartTotal >= 10) {
  total = cartTotal + 2;
} else {
  total = cartTotal + shipping;
}
console.log(total);

total = 0;
if (cartTotal >= 25) total = cartTotal;
else total = cartTotal + shipping;
console.log(total);
