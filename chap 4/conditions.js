console.log('please input your age');
let age = parseInt(prompt("Please enter your age"));
if(isNaN(age)){
    console.log('Please enter a number');
}else{
    

console.log("your age is " + age);
if (age >= 21){
    console.log('Cheers mate you are invited you are invited and can drink');
}
else if(age >= 18){
    console.log('Cheers mate you are invited');
}
else{
    console.log('You are too young get an invite');
}
}

console.log("please enter your height");
let height = parseInt(prompt("Please enter your height"));
console.log("your height is " + height);
let access = height >= 180 ? "You are invited" : "You are not invited";
console.log(access);

let ID = true;
let access2 = ID ? "You are invited" : "You are not invited";
console.log(access2);

console.log("plase enter acivity");
let activity = (prompt("Please enter your activity"));
switch (activity){
    case "waking":
    console.log("6:30 AM");
    break;

    case "breakfast":
    console.log("7:00 AM");
    break;

    case "drive":
    console.log("8:00 AM");
    break;

    case "lunch":
    console.log("12.00 PM");
    break;

    case "home":
    console.log("5:00 PM");
    break;    
}