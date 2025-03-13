
console.log("Using Arrow Function");
let petAnimals = ['Cat', 'Dog', 'Rabbit', 'Parrot', 'Squirel'];
 petAnimals.forEach(pet => console.log(pet));

console.log("Using Spread Function")
 let animalArray = ['Lion','Tiger',...petAnimals,'Puma','Bear','Wolve'];
animalArray.forEach(animal => console.log(animal));

console.log("Combing Arrow Function and Spread Function");
let twoNumbers = [12,5];
let secondNumber = [1,5];
let addTwoNumbers = (numb1,numb2)=>{
    console.log(numb1+numb2);
}
addTwoNumbers(...twoNumbers);

let addFourNumbers = (numb1,numb2,numb3,numb4) => {
    console.log(numb1+numb2+numb3+numb4);
}
addFourNumbers(...twoNumbers,...secondNumber);

console.log("Usiing rest Parameter");
let usingRest = (wordOne,...wordTwo)=>{
    console.log(wordOne,wordTwo);
}
usingRest('Hello there? ','How was your day? ', 'I hope it was lovely.','Just lime mine was!! ');
