
//1. Create a string with several words that have letters with different cases, a mix of upper and lowercase words

let stringWords = 'thIs will be capiTalized for each word into This Will Be Capitalized For Each Word';

//2. Create a function that gets a string as an argument, which will be the value that we will manipulate.

let stringTransformation = (tochange = stringWords)=>{

//3. In the function first transform everything to lowercase letters.

    let smallTransfromation = tochange.toLowerCase();

//4. Create an empty array that can hold the values of the words when we capitalize them.
    let arrayTransfromation = [];

//5. Convert the phrase into words in an array using the split() method.
     arrayTransfromation = smallTransfromation.split(' ');


 /*6. Loop through each one of the words that are now in the new array, so you
     can select each one independently. You can use forEach() for this*/

    arrayTransfromation.forEach(element => {

/*7. Using slice() isolate the first letter in each word, then transform it to
uppercase. Again using slice(), get the remaining value of the word
without including the first letter. Then concatenate the two together to form
the word that is now capitalized.*/
        let firtsLetter = element.slice(0,1);
        let upperFirstLetters = firtsLetter.toUpperCase();
        let remaingLetters = element.slice(1);
        
        let combinedLeters = upperFirstLetters.concat(remaingLetters);


        let result =[];
          result.push(combinedLeters);

/*9. Take the array of updated words and using the join() method, transform
them back into a string with spaces between each word.*/


          let newString = result.join();

/*10. Return the value of the newly updated string with capitalized words that can
then be output into the console.*/

        return console.log(newString);
        
    });
}
stringTransformation();