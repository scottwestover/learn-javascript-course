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

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(name) {
    const tempName = name.split(' ');
    this.firstName = tempName[0];
    this.lastName = tempName[1];
  }

  // fullName() {
  //   return this.firstName + ' ' + this.lastName;
  // }

  static test() {
    // console.log(this);
    console.log('hello');
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
// console.log(user.fullName());
UserProfile.test();

console.log(user.firstName);
user.lastName = 'test';
console.log(user.lastName);
console.log(user.fullName);
user.fullName = 'Test 2';
console.log(user.fullName);
