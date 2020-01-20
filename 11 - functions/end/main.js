// functions
var cartTotal = 0;
var item1Price = 5;

function updateCartTotal(itemPrice) {
  cartTotal = cartTotal + itemPrice;
}

console.log(cartTotal);
updateCartTotal(item1Price);
console.log(cartTotal);
