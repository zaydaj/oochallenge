// Part 1
class Vehicle {
    constructor (a, b, c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        return ('Beep.');
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

let vehicle1 = new Vehicle('honda', 'monster truck', '1999');

// Part 2

class Car extends Vehicle {
    constructor(a, b, c) {
        super(a, b, c);
        this.numWheels = 4;
    }
}

let car1 = new Car('hyundai', 'elantra', '2013');

// Part 3

class Motorcycle extends Vehicle {
    constructor (a, b, c) {
        super(a, b, c);
        this.numWheels = 2;
    }
    revEngine() {
        return ('VROOM!!!!');
    }
}

let motorcycle1 = new Motorcycle('honda', 'nighthawk', 2000);

// Part 4

class Garage {
    constructor (a) {
    this.vehicles = [];
    this.capacity = a;
    }

    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
        return 'Only vehicles are allowed in here!';
        }
        if(this.vehicles.length >= this.capacity) {
            return 'Sorry, we are full.';
        }
        this.vehicles.push(newVehicle); 
        return 'Vehicle added!';
    }
}