//Create a class to track the employees of a company

class Employees{
    #firstname;
    #lastname;
    #yearsworked;
    constructor(firstname, lastname, yearsworked){
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#yearsworked = yearsworked;
    }
    set firstname(firstname){
        this.#firstname = firstname;
    }
    get firstname(){
        return this.#firstname;
    }
    set lastname(lastname){
        this.#lastname = lastname;
    }
    get lastname(){
        return this.#lastname;
    }
    set yearsworked(yearsworked){
        this.#yearsworked = yearsworked;
    }
    get yearsworked(){
        return this.#yearsworked;
    }


}

//Create two or more people. Add the people into an array.
woman = new Employees;
woman.firstname = 'Liz';
woman.lastname = 'Truss';
woman.yearsworked = 12;

man = new Employees;
man.firstname ='Emmanuel';
man.lastname = 'Macron';
man.yearsworked = 15;

let peopleArray = [];
peopleArray.push(woman);
peopleArray.push(man);
console.log(peopleArray);

//Set up a prototype to return the details of the person's first and last names and how long they've worked at the company.
Employees.prototype.info = function(){
    console.log(`The employees name is: ${this.firstname} ${this.lastname} and they have worked for ${this.yearsworked}.`);
}
woman.info();
man.info();

//Iterate the contents of the array to output the results into the console, adding some text to make the output a full sentence.
