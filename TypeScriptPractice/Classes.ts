function Person(ssn, firstName, lastName){
    this.ssn =ssn;
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.getFullName =function(){
    return `${this.firstName} ${this.lastName}`;

}
let person = new Person('12223342','shubham','singh');
console.log(person.getFullName());