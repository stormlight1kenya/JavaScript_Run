
console.log("Using Arrow Function");
let petAnimals = ['Cat', 'Dog', 'Rabbit', 'Parrot', 'Squirel'];
 petAnimals.forEach(pet => console.log(pet+'\n'));

console.log("Using Spread Function")
 let animalArray = ['Lion','Tiger',...petAnimals,'Puma','Bear','Wolve'];
animalArray.forEach(animal => console.log(animal+'\n'));

console.log("Combing Arrow Function and Spread Function");
let twoNumbers = [12,5];
let addTwoNumbers = (numb1,numb2)=>{
    console.log(numb1+numb2);
}
addTwoNumbers(...twoNumbers);