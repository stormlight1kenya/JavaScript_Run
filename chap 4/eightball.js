/*
Magic Eight Ball
*/

//generatting a randon number
 let randomNumber = Math.random();
 randomNumber = randomNumber * 6;
 generaedNuber = Math.floor(randomNumber);

//getting question from user
console.log("Ask the magic ball your question");
let magicQuestion = prompt("Enter Query");

  //values to hold result
let answer = "hello";


// generating answer
switch(generaedNuber){
    case 1: 
        answer ="It will not be easy";
    break;

    case  2:
        answer = "It will work out";
    break;

    case 3:
        answer = "Give it another go";
    break;

    case 4:
        answer = "Better luck next time";
    break;

    case 5:
        answer = "So lucky";
    break;

    case 6:
        answer = "It will happen soon";
    break;
}
//outputting result
console.log("your question was: " + magicQuestion + "the answer is: "+ answer);