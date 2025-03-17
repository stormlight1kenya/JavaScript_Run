//parent class
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
this.maxSpeed = maxSpeed;
}
move() {
console.log("moving at", this.currentSpeed);
}
accelerate(amount) {
this.currentSpeed += amount;
}
}

//child class
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
    }
    doWheelie() {
    console.log("Driving on one wheel!");
    }
    }

    let motor = new Motorcycle("Black", 0, 250, "gasoline");
    console.log(motor.color);
    motor.accelerate(50);
    motor.move();

    //second child class
    class Boat extends Vehicle{
        constructor(color,currentSpeed,maxSpeed,waterDiplacement){
        super(color,currentSpeed,maxSpeed);
        this.waterDiplacement = waterDiplacement;

        }
        floatWater(){
            console.log('Hello there I am crusing on water');

        }
    }
    let newVirginia = new Boat('White','0','50','gasoline');
    console.log(newVirginia.color);
    newVirginia.accelerate(5);
    newVirginia.move();
    newVirginia.floatWater();