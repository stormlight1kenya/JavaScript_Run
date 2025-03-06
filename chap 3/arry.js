var animals = [
{name: 'tim', species:'rabbit'},
{name: 'caro', species:'dog'},
{name:'hamilton', species: 'dog'},
{name:'harold', species:'fish'},
{name:'jimmy', species:'fish'},
{name:'ursala', species:'cat'}
];

console.log(animals);

var dogs = animals.filter(animal => animal.species === 'dog');

console.log(dogs);
