class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        console.log(`Hello, I am ${this.firstname} ${this.lastname}`);
    }
    nameBinder(){
        console.log(this.firstname+this.lastname);
    }
}

let person1 = new Person('Tom','Wafula');

let person2 = new Person('Levi','Odessa');
let person3 = new Person('Ruth', 'Wabwire');
let person4 = new Person('Michael','Otieno');

console.log(`Hello ${person1.firstname} ${person1.lastname}`);
console.log(`Hello ${person2.firstname} ${person2.lastname}`);
person1.greet();
person3.greet();
person4.nameBinder();
person1.nameBinder();

