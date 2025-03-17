//Excersise 1
//class that contains properties for different animal species and the sound that each species makes



class Animal{
    #type;
    #species;
    #sound;
    constructor(type, species, sound){
       this.#type = type;
       this.#species = species;
       this.#sound = sound; 
    }
    animalsound(){
        console.log(`${this.#species}, prosuce a ${this.#sound} sound`);
    }
    get type(){
        return this.#type;
    }
    set type(type){
        this.#type =type;
    }
    get species(){
        return this.#species;
    }
    set species(species){
        this.#species =species;
    }
    get sound(){
        return this.#sound;
    }
    set sound(sound){
        this.#sound = sound;
    }
}
dog = new Animal();
dog.type = 'Hound';
dog.species = 'German Shephard';
dog.sound = 'Bark';

cat = new Animal();
cat.type = 'Feline';
cat.species = 'Orange Cat';
cat.sound = 'Purr';

duck = new Animal();
duck.type = 'Bird';
duck.species = 'Geese';
duck.sound = 'Quack';

//Create a method that prints a given animal and its sound
cat.animalsound();
dog.animalsound();
duck.animalsound();

//Add a prototype with another action for the animal.

Animal.prototype.speed = '15km/hr';
cat.speed = '3km/hr';
dog.speed = '15km/hr';
duck.speed = '7km/hr';

//Output an entire animal object into the console
console.log(`The animal type is:${cat.type}, the animal species is: ${cat.species}, the sound it makes is: ${cat.sound}, and the speed it travels is ${cat.speed}.`);
console.log(`The animal type is:${dog.type}, the animal species is: ${dog.species}, the sound it makes is: ${dog.sound}, and the speed it travels is ${dog.speed}.`);
console.log(`The animal type is:${duck.type}, the animal species is: ${duck.species}, the sound it makes is: ${duck.sound}, and the speed it travels is ${duck.speed}.`);
