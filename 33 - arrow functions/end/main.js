// Arrow Functions
function add(a, b) {
  return a + b;
}
const a = (a, b) => {
  return a + b;
}
// const a = (a, b) => a + b;
console.log(a(1, 2));

const b = a => a + 2;
console.log(b(1));

// function b(a) {
//   return a + 2;
// }

const group = {
  items: [1],
  showItems: function () {
    this.items.forEach(function () {
      console.log(this);
    });
  },
  showItems2: function () {
    this.items.forEach(() => {
      console.log(this);
    });
  }
}

group.showItems();
group.showItems2();
