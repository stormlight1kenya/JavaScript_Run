function wordScrambler(wordString){


    let scrambledWord = '';
    let wordLength = wordString.length;


    for(let i = 0; i< wordLength;i++){

        let randomLetterGenerator = Math.floor(Math.random()*wordString.length);
        let randomLetter = wordString[randomLetterGenerator];
        
        scrambledWord = scrambledWord.concat(randomLetter);
        wordString = wordString.substring(0,randomLetterGenerator) + wordString.substring(randomLetterGenerator+1);

        console.log("Scrambled so far:", scrambledWord);
        console.log("Remaining letters:", wordString);
       

    }
    return scrambledWord;

}

let wordinput='Apple';
let result = wordScrambler(wordinput);
console.log(wordinput);
console.log(result);