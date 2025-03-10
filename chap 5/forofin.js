
//for of and for in loops
//for of loop used to manipulate arrays

let cars = ["Toyota", "BMW", "Volkes Wagen", "Subaru", "Tesla", "Ford"];
for(let car of cars){
    console.log(car);
}

let numCounter = [];
for(let i = 1; i < 11; i++){
    numCounter.push(i);
    
}
console.log(numCounter);

for(let numbersCount of numCounter){
    console.log(numbersCount);
}
//for in loop used to manipulate objects

let personProfile = {name:'Paul', age: 27, sex: 'male'};
for(let profile in personProfile){
    console.log(profile);
    console.log(personProfile[profile]);
}