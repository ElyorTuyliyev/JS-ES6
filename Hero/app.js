class Hero {
  constructor(name, damage, speed, skills) {
    this.name = name;
    this.damage = damage;
    this.speed = speed;
    this.skills = skills;
    this.startPoint = 0;
    this.hp = 100;
  }
  move() {
    this.startPoint += this.speed;
  }
  lose(damage) {
    this.hp -= damage;
  }
}

class Butcher extends Hero {
  hook(target) {
    target.hp -= 35;
  }
  jump() {
    this.startPoint -= 120;
    super.lose; //  ruxsat berish
  }
}
class Admiral extends Hero {
  strikeShip(target) {
    target.hp -= 34;
  }
  teleport() {
    this.startPoint = Math.floor(Math.random() * this.startPoint);
  }
}

const butcher = new Butcher("Butcher", 20, 430, ["hook", "jump"]);
const admiral = new Admiral("Admiral", 40, 360, ["strike ship", "teleport"]);

butcher.move();
butcher.move();
butcher.move();
butcher.move();
butcher.move();
admiral.lose(butcher.damage);
admiral.move();
admiral.move();
admiral.move();
admiral.move();
butcher.teleport();
console.log(admiral);
admiral.teleport();
console.log(butcher, admiral);
