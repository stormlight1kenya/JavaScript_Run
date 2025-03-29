/*1. Create an array of numbers.
2. Using the array map method and an anonymous function, return an updated
array, multiplying all the numbers in the array by 2. Output the result into
the console.
3. As an alternative method, use the arrow function format to multiply each
element of the array by 2 with the array map() method in one line of code.
4. Log the result onto the console.
*/
let numberArray = [1,1,2,4,5,2,4,5,6,8,33,32,2,3,1];
let mappedArray = numberArray.map((number,index)=>number*2);
console.log(mappedArray);