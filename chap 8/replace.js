//1. Create the previously specified string, and convert it to lowercase.

let newString = 'I love JavaScript';
let stringLowered = newString.toLowerCase();

//2. Create an array containing the vowels: a, e, i, o, u.

let newVowels = ['a','e','i','o','u'];
let finalString = stringLowered;

/*3. Loop through each letter you have in the array, and output the current letter
into the console so that you can see which letter will be converted.*/
newVowels.forEach((element,index) => {
    console.log(element,index);

/*4. Within the loop, using replaceAll() update each vowel substring with the
    index value of the letter from the vowel array
*/
    finalString  = finalString.replaceAll(element,index);
   

});
//5. Once the loop completes output the result of the new string into the console.
console.log(finalString);

