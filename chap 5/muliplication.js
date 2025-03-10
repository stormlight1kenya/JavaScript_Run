// Multiplication Table

//creating array to hold the table
let multiTable =[];

//creating values to  huld the numbers and result
let firstValue = 13;
//firstValue = firstValue +1;
let secondValue = 15;
//secondValue = secondValue +1;
let resultValue;

//creating rows 
for (let i = 1; i <= firstValue; i++){
    let tempResult = [];
    for (let j = 1; j <= secondValue; j++){
    resultValue = i *j;
    tempResult.push(resultValue);
    }
   multiTable.push(tempResult);
}
console.table(multiTable);