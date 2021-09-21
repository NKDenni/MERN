
class Ninja {

    constructor(name, health = Number, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    };

    showStats() {
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    };

    drinkSake() {
        this.health += 10;
        console.log(`Health: ${this.health}`);
    };
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    // sayName(){
    //     console.log(this.name);
    // };

    showStats(){
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`)
    };

    speakWisdom(){
        console.log("Wax on wax off.")
        super.drinkSake();
        
    }
}

const Ninja1 = new Ninja("Hyabusa", 100, 5);

Ninja1.sayName();
Ninja1.showStats();
Ninja1.drinkSake();

const Sensei1 = new Sensei("Splinter",210,12,10,11);
const Sensei2 = new Sensei("Mr. Myagi",300,15,15,20);

Sensei1.sayName();
Sensei1.showStats();

Sensei2.showStats();
Sensei2.speakWisdom();