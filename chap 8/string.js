let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);

//sring to array
let greetingWord = "Hello, How, Is, Eveybody, Doing";
let reseultGreeting = greetingWord.split(",");
console.log(reseultGreeting);

let result1 = "Hello JavaScript";
let arr_result = result1.split(" ");
console.log(arr_result);

//array to string
let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);

let words = [ 'Hello', ' How', ' Is', ' Eveybody', ' Doing' ];
let wordJoin = words.join();
console.log(wordJoin);

//Working with index and positions
let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);
let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);

let indexNotFound = poem.indexOf("python");
if(poem.indexOf("python") != -1) {
console.log(indexNotFound);
}

//uing search
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

let notFound = searchStr.search("JavaScript");
console.log(notFound);

let pos1 = poem.charAt(8);
console.log(pos1);

//Creating substrings
let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0,3);
console.log("1:", substr1);
console.log("2:", substr2);

//Replacing parts of the string
let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

//The start and end of a string
let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);
let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2);
let bool_start3 = encouragement.toLowerCase().startsWith("you");
console.log(bool_start3);