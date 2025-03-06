let game = ['Rock', 'Paper', 'Scissors'];

//generating computer and player random numbers
let computerRandNumber = Math.random();
computerRandNumber = computerRandNumber * 3;
let compRandNumb = Math.floor(computerRandNumber);
console.log(compRandNumb);
console.log(game[compRandNumb]);