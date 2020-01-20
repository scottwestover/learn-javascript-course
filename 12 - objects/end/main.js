// Objects
var a = 5;

const userProfile = {
  firstName: 'Joe',
  lastName: 'Smith',
  age: 20,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};
console.log(userProfile);
console.log(userProfile.firstName);
console.log(userProfile['firstName']);
console.log(userProfile.fullName());
