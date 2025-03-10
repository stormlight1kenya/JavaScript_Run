//empty arry for table
let myTable = [];

//setting colums, rows, and cell counter
let tableRows = 10;
let tableColums = 4;
let cellCounter = 0;

//creaing table rows
for (let i = 0; i < tableRows; i++){

//storing it in tempory table
let tempTable = [];

//creating colums
for (let j = 0; j < tableColums; j++){
cellCounter++;
tempTable.push(cellCounter);
}
//pushing temptable into myTable
myTable.push(tempTable);}

//printing table
console.table(myTable);



