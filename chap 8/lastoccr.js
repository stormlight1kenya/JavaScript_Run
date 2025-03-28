let petArray = ['Cat','Dog','Horse','Cat','Dog','Horse','Hamster','Koi','Cat','Hamster','Koi','Cat'];
let lastPosition = petArray.lastIndexOf('Cat');

console.log(lastPosition);

function petFilter(element,index){
    return element == 'Cat';
}
let mypets = petArray.filter(petFilter);
console.log(mypets); 