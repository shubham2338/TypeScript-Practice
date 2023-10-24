function Person(ssn, firstName, lastName) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName = function () {
    return "".concat(this.firstName, " ").concat(this.lastName);
};
var person = new Person('12223342', 'shubham', 'singh');
console.log(person.getFullName());
