let maxNumb = 10;

let randomNumb = Math.floor(Math.random() * maxNumb) + 1;

console.log("Guess a number between 1 and 10");

let guessNumb = parseInt(prompt("Enter Number"));

if(isNaN(guessNumb)){
console.log("Not a number! Enter Numbers only!");
}else{
while (guessNumb !== randomNumb){
if(guessNumb > randomNumb){
console.log("Too high");
}else if(guessNumb < randomNumb){
console.log("Too low");}

guessNumb = parseInt(prompt("Enter Number"));
}
console.log("you get it");
}