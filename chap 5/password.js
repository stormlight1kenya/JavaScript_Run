let userName;
let userPassword;

do{
    console.log("Enter Your User Name");
     userName = prompt (" User Name");
    console.log ("Enter Your Password");
    userPassword = prompt(" User Password");
    savedUser = "emanu";
    savedPassword = "123manu";
    
    if(userName === savedUser && userPassword === savedPassword){
    console.log('Welcome ' + userName );
break;
}else{
    console.log("Wrong User Name or Password!");
    }
 }while (userName !==  "emanu" || userPassword !== "123manu");
    
    