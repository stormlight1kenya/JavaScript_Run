 const add = (a,b) => a+b;
console.log(add(5,10));


function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
    getRecursive(--nr);
    }
    }
    getRecursive(3);


function getFactorial(number){
    if( number === 0){
        return 1;
    }else{
        return number * getFactorial(number-1);
    }
}

console.log(getFactorial(5));
