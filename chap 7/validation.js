//make city code satry with k
class Pepoel{
    #name;
    #city
    #address; 
    constructor(name,city,address){
        this.#name = name;
       if(city.starsWith('K')){ this.#city = city;}else{
        this.#city = 'K'+city;
       }
        this.#address = address;
    }
}
let pepoel1 =new Pepoel('Betty','Jk1NO','Arizona SWJ 01');
console.log(pepoel1.thisname);