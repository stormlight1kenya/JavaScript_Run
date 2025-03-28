//Searching for dogs in an array
let pets = ['Dog', 'Rabbit', 'Mouse','Cow','Elephant','Dog','Cat','Dog'];

function petFilter (element, index){
    return element == 'Dog';
}
 
let myPet  = pets.filter(petFilter);
console.log(myPet);
