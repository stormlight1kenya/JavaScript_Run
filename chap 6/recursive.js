 const add = (a,b) => a+b;
console.log(add(5,10));


function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
    getRecursive(--nr);
    }
    }
    getRecursive(3);


function numberCheker(numberToCheck){
    if(numberToCheck != 0){
        numberCheker(numberToCheck-1);
        console.log(numberToCheck);
        
    }else{
    console.log('1');}
}
//numberCheker(6);
//numberCheker(1);
numberCheker(0);