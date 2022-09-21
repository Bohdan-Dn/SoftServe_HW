// Task 1
class Thing {
    constructor(name, color, width, height, lenght) {
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
        this.lenght = lenght;
    }

    volume(width, height, lenght) {
        console.log('Volume of this ' + this.color + ' ' + this.name + ' is: ' + parseInt(width * lenght * height) + ' мм3')
    };
}

// Battery
class Battery extends Thing {
    constructor(name, color, workHours) {
        super(name, color);

        this.type = 'Krona';
        this.workHours = workHours;
    };
    charge(workHours) {
        if (workHours > 10) {
            console.log('Your ' + this.type + this.name + ' is low');
        } else {
            console.log('The charge of your ' + ' ' + this.type + ' ' + this.name + ' ' + (100 - workHours * 10) + '%');
        }
    };
}
const battery = new Battery('battery', 'blue', '5');
battery.charge(4);
battery.volume(48.5, 26.5, 17.5);

// Table
class Table extends Thing {
    constructor(name, color) {
        super(name, color);
    };
};
const table = new Table('table', 'brown');
table.volume(100, 200, 20);

//Door 
class Door extends Thing {
    constructor(name, color, material) {
        super(name, color);

        this.material = material;
    }

    price(material) {
        switch (material) {
            case 'plastic':
                console.log(`Price of your ${this.color} ${this.material} ${this.name}: 20-100$`);
                break;
            case 'metal':
                console.log(`Price of your ${this.color} ${this.material} ${this.name}: 100-500$`);
                break;
            case 'wood':
                console.log(`Price of your ${this.color} ${this.material} ${this.name}: 500-700$`);
                break;
        };
    };
};
const door = new Door('door', 'red');
door.volume(70, 20, 5);
door.price('metal');

//Conditioner
class Conditioner extends Thing {
    constructor(name, color, brand, power) {
        super(name, color);

        this.brand = brand;
        this.power = power;
    }

}
const conditioner = new Conditioner('conditioner', 'white', 'Samsung', '1kilowatt');
conditioner.volume(500, 200, 50);


