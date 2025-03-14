let countDown = 10;
 function countDownFunction(countDown){
    console.log(`This is the starting number: ${countDown}`);
    if(countDown<1){
        return countNumber;

    }else if(countDown > 1){
        countDownFunction(--countDown);
    }
    function secondCounDownFunction(countNumber){
        if(countDown>0){
            console.log(`The count Down is:${countDown}`);
            countDown -1;
            return countDown;
        }

    }
}
countDownFunction();