// Magic prize

//inputing user number

console.log("Enter your choice number");
let magicNumber = parseInt(prompt("Enter Number"));
let prize = "Sorry you lose! Tri again";
if (isNaN(magicNumber)){
    console.log("Please enter a number!");
}else{
    switch(magicNumber){
        case 0 :
            prize ="Teddy Bear";
        break;

        case 1:
        case 2: 
            prize =  "Lion Stuffy";
        break;

        case 3 :
            prize = "Elephant toy";
        break;

        case 4 :
            prize = "Hawk stuffy";
        break;

        case 5 :
        case 6 :
        case 7 :
            prize = "a cute little mouse";
        break;

       

        case 8:
            prize = "a white rabbit";
        break;

        case 9:
        case 10:
            prize = "a Button";
        break;
    }
    console.log("You selection is: " + magicNumber +" Your prize is: "+ prize);
}

