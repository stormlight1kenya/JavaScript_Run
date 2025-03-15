function greetFriend(friendName,callback){
    console.log(`Hello ${friendName}. `);
    callback();
}
function sayGoodbay(){
    console.log('And Goodbye');
}
greetFriend(`Ruth`, sayGoodbay);

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
    };
    setTimeout(youGotThis, 1000);