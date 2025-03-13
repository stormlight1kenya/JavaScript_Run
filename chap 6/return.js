//Using return

 let addTwoNumbers = (numb1, numb2)=>{
    return numb1 + numb2;
}

let resultArray = [];
for (let i = 0; i <10; i++){
    let result = addTwoNumbers(i, 2*i);
    resultArray.push(result);
}
console.log(resultArray)


