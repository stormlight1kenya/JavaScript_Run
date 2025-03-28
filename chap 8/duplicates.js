//removing duplicates using the fitler and index of methods 
let nameArray = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"];

let namesArr = nameArray.filter((element,index)=> nameArray.indexOf(element) === index);
console.log(namesArr);

//removing duplicates uing the set method

let duplicaeNames = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike",
    "Laurence", "Mike", "Laurence", "Mike"];
let newnames = new Set(duplicaeNames);
let namesx = [...newnames];
console.log(namesx); 