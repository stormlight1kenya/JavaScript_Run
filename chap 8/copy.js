/*The copywitthin has theree 
The first values shows which index to replace
The second on shows which index to be cope to replace the first value
The third value reprents the range of copying 
not specifyiny he range will copy all of the values 
*/
let arr = ["grapefruit", 4, "hello", 5.6,11,'here', true];
arr.copyWithin(0, 5,6);
console.log(arr);

let arr2 = ["grapefruit", 4, "hello there", 5.6,11,'here', true,'last'];
arr2.copyWithin(0,5);
console.log(arr2);
