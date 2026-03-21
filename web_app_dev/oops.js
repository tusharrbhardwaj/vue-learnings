// OOPs in JS

// Constructor function

// function Person(firstName, lastName,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
    
// }

// // prototype --- another object but we can attach methods and properties with this prototype
// Person.prototype.getBirthyear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullname = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// Class

class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    get getBirthyear(){
        return this.dob.getFullYear();
    }

    get getFullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiation object
const person1 = new Person('John', 'Doe', '9-22-2007');

console.log(person1);
console.log(person1.getBirthyear);
console.log(person1.getFullname);


