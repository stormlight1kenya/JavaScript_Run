// Rock, paper, scissors game

// arry to hold values 
let game = ['Rock', 'Paper', 'Scissors'];

//generating computer and player random numbers
let computerRandNumber = Math.random();
computerRandNumber = computerRandNumber * 3;
let compRandNumb = Math.floor(computerRandNumber);
let compChoice = game[compRandNumb];

let playerRandNumber = Math.random();
playerRandNumber = playerRandNumber * 3;
let playRandNumb = Math.floor(playerRandNumber);
let playerchoice = game[playRandNumb];


//player out put
let gameChoices;
gameChoices = "You Have generated: "+ playerchoice +" The Computer has generated: "+ compChoice;
console.log(gameChoices);

//game logic
if (playerchoice == compChoice){
    console.log("You tie! Try again!");

}else if(playerchoice === 'Rock' && compChoice === 'Scissors' ){
    console.log("You win!");
}else if(playerchoice === 'Scissors' && compChoice === 'Paper'){
    console.log("You win!");
}else if (playerchoice === 'Paper' && compChoice === 'Rock'){
    console.log('You win!');
}else{
    console.log('You lose!');
}