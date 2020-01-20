// Inheritance
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
}

class CustomProfile extends UserProfile {
  constructor(firstName, lastName, password) {
    super(firstName, lastName);
    this.password = password;
  }
}

const user = new CustomProfile('Steve', 'Smith', '1234');
console.log(user);
// user.fullName = 'Test 1';
// console.log(user);
