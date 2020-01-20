// this
// method
const userProfile = {
  firstName: 'Joe',
  lastName: 'Smith',
  age: 20,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// alone
console.log(this);

// function, (strict mode - this is undefined)
function test() {
  return this;
}
console.log(test());

// event
