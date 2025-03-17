// Menu items price calculator
// This class calculates the combined price of multiple menu items for an order

class Menu {
    // Private fields for menu item prices
    #burgerPrice = 350;
    #chipsPrice = 200;
    
    // Constructor to get quantities of each item
    constructor(burgerQuantity, chipsQuantity) {
        this.burgerQuantity = burgerQuantity;
        this.chipsQuantity = chipsQuantity;
    }
    
    // Method to calculate total cost based on quantities and prices
    calculateTotal() {
        return (this.burgerQuantity * this.#burgerPrice) + (this.chipsQuantity * this.#chipsPrice);
    }
    
    // Getter to access the calculated total
    get totalCost() {
        return this.calculateTotal();
    }
}

// Create different order combinations
const order1 = new Menu(3, 2); // 3 burgers, 2 chips
const order2 = new Menu(1, 4); // 1 burger, 4 chips
const order3 = new Menu(2, 0); // 2 burgers, 0 chips

// Output the total costs
console.log(`Order 1: ${order1.burgerQuantity} burgers and ${order1.chipsQuantity} chips. Total cost: Ksh.${order1.totalCost}`);
console.log(`Order 2: ${order2.burgerQuantity} burgers and ${order2.chipsQuantity} chips. Total cost: Ksh.${order2.totalCost}`);
console.log(`Order 3: ${order3.burgerQuantity} burgers and ${order3.chipsQuantity} chips. Total cost: Ksh.${order3.totalCost}`);