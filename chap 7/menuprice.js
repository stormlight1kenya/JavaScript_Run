/*Menu items price calculator
Create a class which will allow you to work out the combined price of a number of
items, and interact with it to work out the total cost of different orders.
*/

//Create a class that contains the prices of two menu items as private field declarations.
//Use the constructor in the class to get the argument values (how many of each item are being bought).
class Menu{
    #item;
    #quantity;
    #price;
    constructor(item,quantity,price){
        this.#item = item;
        this.#quantity = quantity;
        this.#price = price;
    }
    set item(item){
        this.#item = item;
    }
    get item(){
        return this.#item;
    }
    set quantity(quantity){
        this.#quantity = quantity;
    }
    get quantity(){
        return this.#quantity;
    }
    set price(price){
        this.#price = price;
    }
    get price(){
        this.#price;
    }
    //Create a method to calculate and return the total cost depending on how many of each item the user selects
    totalPrice(){
        let sum = this.#quantity * this.#price;
        return sum;
    }

    //Use a getter property to grab the value output by the calculation method
    get sum(){
        return this.sum;
    }
}

//Create two or three objects with different combinations of menu selections, and output the total cost in the console.
item1 = new Menu;
item1.item = 'Burger';
item1.quantity = 3;
item1.price = 350;

item2 = new Menu;
item2.item = 'Chips';
item2.quantity = 2;
item2.price = 200;


console.log(`You have orderd: ${item1.item} x ${item1.quantity}. Totaling to Ksh.${item1.totalPrice()}`);
console.log(`You have orderd: ${item2.item} x ${item2.quantity}. Totaling to Ksh.${item2.totalPrice()}`);