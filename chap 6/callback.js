function greetFriend(friendName,callback){
    console.log(`Hello ${friendName}. `);
    callback();
}
function sayGoodbay(){
    console.log('And Goodbye');
}
greetFriend(`Ruth`, sayGoodbay);