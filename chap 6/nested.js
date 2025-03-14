let countDownNumber = 10;

function countDownFunction(countDownNumber){
    console.log(`Current count down value: ${countDownNumber}`);
    if(countDownNumber<1){
        return;
    }else{
        return countDownFunction(--countDownNumber);

    }
}
countDownFunction(countDownNumber);