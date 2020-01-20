// Classes
const userProfile = {
  firstName: 'Joe',
  lastName: 'Smith',
  age: 20,
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

class UserProfile {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

const user = new UserProfile('Joe', 'Smith');
console.log(user);
console.log(userProfile);
console.log(typeof user);
console.log(typeof userProfile);
console.log(user instanceof Object);
console.log(userProfile instanceof Object);
console.log(user instanceof UserProfile);
console.log(userProfile instanceof UserProfile);
console.log(user.fullName());
