myWork = [];

for(i = 0; i < 10; i++){

let lesson = {name: `Lesson ${i}`, status : (i % 2 === 0)? true :false}
myWork.push(lesson);
   
}
console.log(myWork);