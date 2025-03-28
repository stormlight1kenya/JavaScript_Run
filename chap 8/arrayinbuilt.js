//Performing a certain action for every item
let arr = ["grapefruit", 4, "hello", 5.6, true, false];
function printStuff(element, index) {
console.log("Printing stuff:", element, "on array position:", index);
}
arr.forEach(printStuff);

