// Using Gettters and Setters
class Person {
    #firstname;
    #secondname;
    #age;
    constructor(firstname, secondname, age){
        this.#firstname = firstname;
        this.#secondname = secondname;
        this.#age = age;
    }
    get firstname(){
        return this.#firstname;
    }
    set firstname(firstname){
        this.#firstname = firstname;
    }
    get secondname(){
        return this.#secondname;
    }
    //setting validation rule that ensures secondnae has a c
    set secondname(secondname){
        if(secondname.startsWith('C')){
        this.#secondname =secondname;}else{
            this.#secondname = "C" + secondname;
        }
    }
    get age(){
        return this.#age;
    }
    set age(age){
        this.#age = age;
    }
}

let woman = new Person('Julia','Kazimi', 21);
console.log(woman.firstname);
console.log(woman.secondname);
woman.firstname ='Julie'; 
woman.secondname ='Kazimi' ;
console.log(woman.firstname);
console.log(woman.secondname);