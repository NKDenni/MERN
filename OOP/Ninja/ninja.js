class Ninja {
    
    constructor(name, health = Number, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    };

    showStats() {
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    };

    drinkSake() {
        this.health = this.health + 10;
        console.log(this.health);
    };
}

const Ninja1 = new Ninja("Hyabusa", 100);

Ninja1.sayName();
Ninja1.showStats();
Ninja1.drinkSake();