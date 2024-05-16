class Chess {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.startPoint = 0;
  }
  move() {}
  lose() {}
}

class White extends Chess {}
class Black extends Chess {}

const White = new White("White", 0);
const Black = new Black("Black", 0);
