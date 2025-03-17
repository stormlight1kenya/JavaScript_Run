class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
    
    greet() {
    console.log("Hi there!");
    }
}

Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
    };
    Person.prototype.favoriteColor = "green"; //this acts a default value
    let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();

let man = new Person('James','Wachira');
man.favoriteColor = 'blue';
console.log(man.favoriteColor);
man.introduce();