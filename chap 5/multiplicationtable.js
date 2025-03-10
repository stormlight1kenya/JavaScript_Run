// Multiplication Table

//creating array to hold the table
let multiTable =[];

//creating values to  huld the numbers and result
let firstValue = parseInt(prompt("Enter a number"));

let secondValue = parseInt(prompt("Enter a number"));

let resultValue;

//creating rows 
if (isNaN(firstValue) || isNaN(secondValue)){
    console.log("Please enter a number");
}else{
for (let i = 1; i <= firstValue; i++){
    let tempResult = [];
    for (let j = 1; j <= secondValue; j++){
    resultValue = i *j;
    tempResult.push(resultValue);
    }
   multiTable.push(tempResult);
}
console.table(multiTable);
}