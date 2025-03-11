
function myCalculator(){
     num1 = parseInt(prompt("Enter First Number"));
     calcOperator = prompt("Enter Operator");
     num2 = parseInt(prompt("Enter Second Number"));
    if(isNaN(num1) || isNaN(num2)){
        console.log("Please Enter Digits only");
    }else{
        if (calcOperator != '*' && calcOperator != '+' && calcOperator != '-' && calcOperator != '/') {
            console.log("Operand not recognized! Use: +, -, *, /");

        }else{
            if(calcOperator === '+'){
                return console.log("The Sum is: " + (num1 + num2) );
            }else if(calcOperator === '-'){
                return  console.log("The Differene is: "+ (num1-num2));
            }else if(calcOperator === '*'){
                return console.log("The Result is: "+ (num1 * num2));
            }else if(calcOperator === '-'){
                return console.log("The difference is: "+ (num1 / num2));
            }else{
                return console.log("Error! Could not Perform Operation!");
            }
        }
    }
}

myCalculator();