let descriptWords = ['Cute','fair','Fancy','Delightful','Kind','Clever','Smart','Intelligent','Creative','Innovative','Creative','Smart','Intelligent','Creative','Innovative'];
randomDescriptor = Math.floor(Math.random() * descriptWords.length);
function userInput(){
    userWords = prompt("Please Input Your Name");
    return console.log(`You Have Entered: ${userWords} which has generated: ${descriptWords[randomDescriptor]}`);
}

userInput();