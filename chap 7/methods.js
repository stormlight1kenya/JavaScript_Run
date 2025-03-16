//Methods taking parameters in a class
class Person{
    constructor(firstname, secondname){
        this.firstname = firstname;
        this.secondname = secondname;
    }
    compliment(firstname,object){
        return `That's a wonderfull ${object}, ${this.firstname} `;
    }
}
let man = new Person('Paul','Kasongo');
let woman = new Person('Julie', 'Waker');

let compliment = man.compliment('','Shoe');
console.log(compliment);
compliment = woman.compliment('','handbag');
console.log(compliment);