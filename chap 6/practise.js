//creating array tto store loop results
let calculatorLoop = [];

//Addition function
function addTwoNumbers(numb1, numb2){
    return numb1 + numb2;
} 

//Multiplication Function
function multiplyTwoNumbers(numb1,numb2){
    return numb1 * numb2;
}

//Subration Function
function subtractTwoNumbers(numb1,numb2){
    return numb1 - numb2;
}

//Division Function
function divideTwoNumbers(numb1,numb2){
    return numb1 / numb2;
}

//Calculator function
function myCalculator(){
    let numb1 = parseInt(prompt("Enter First Number"));
    let calcOperator = prompt("Enter Operator");
    let numb2 = parseInt(prompt("Enter Second Number"));
   if(isNaN(numb1) || isNaN(numb2)){
       console.log("Please Enter Digits only");
       return null;
   }else{
       if (calcOperator != '*' && calcOperator != '+' && calcOperator != '-' && calcOperator != '/') {
           console.log("Operand not recognized! Use: +, -, *, /");
           return null;

       }else{
           if(calcOperator === '+'){
               let result = addTwoNumbers(numb1,numb2);
               return result;
           }else if(calcOperator === '-'){
              let result = subtractTwoNumbers(numb1,numb2);
              return result;
           }else if(calcOperator === '*'){
              let result = multiplyTwoNumbers(numb1,numb2);
              return result;
           }else if(calcOperator === '/'){
               let result = divideTwoNumbers(numb1,numb2);
               return result;
           }else{
                console.log("Error! Could not Perform Operation!");
               return null;
           }
       }
   }
}
//Looping Calculator
 for (let i = 0; i < 5; i++){ 

let result = myCalculator();
if(result !== null){
    calculatorLoop.push(result);
}

 }