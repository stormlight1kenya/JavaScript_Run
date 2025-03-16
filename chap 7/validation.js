//make city code satry with k
// the # symbol prevents a class property from being accessed outside the class

class Person{
    #city
    constructor(firstname, secondname, city){
        this.firstname = firstname;
        this.secondname = secondname;
        if(city.startsWith('+1')){
            this.#city = city;}else{
                this.#city = `+1${city}`
            }
    }}

    let person1 = new Person('Tom','Wafula','+254');
    console.log(person1);   
    let person2 = new Person('Levi','Odessa','254');
    console.log(person2);