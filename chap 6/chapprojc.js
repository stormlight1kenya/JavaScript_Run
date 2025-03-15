let number;
 function countRecursive(number){
    if(number <10){
        console.log(number);

        return countRecursive(++number);
        
    }else{
        return number;
      
    }
 }
 console.log(countRecursive(11));
 console.log(countRecursive(2));