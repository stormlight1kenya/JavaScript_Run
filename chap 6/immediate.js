//Imediately invoked functions
//this are functions without a name and are immediately callled after declaration
(()=>{console.log('Say hello');})();

(()=>{
    console.log('Who let him in')})();

    let stringValue = '1000';
    (()=>{
        stringValue = 'Hello Sikuku';
        console.log(stringValue);
    })();
    console.log(stringValue);


let newstringValue ='1000';
 const result = (()=>{
        var newstringValue = 'Im on my way';
        return newstringValue;
    })();

    console.log(newstringValue);
    console.log(result);

((valueofString)=>{
        
        console.log(`The passed string is:${valueofString}`);
    })('I love Harry Poter');