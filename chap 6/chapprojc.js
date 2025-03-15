//Count up recursive
/*
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
 */

 //set time out order

let oneOut = ()=>{ console.log('One');
        
}

let twoOut = ()=> console.log('Two');

let threeout = ()=>{console.log('Three');
    oneOut();
    twoOut();

}

let fourOut = ()=>{ console.log('Four');
    setTimeout(oneOut,0);
    threeout();


}
console.log('First OutPut\n');
oneOut();
console.log('Second Output\n');
twoOut();
console.log('Third Output\n');
threeout();
console.log('Fourth Output\n');
fourOut();