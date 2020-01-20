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
