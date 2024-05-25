class Chess {
  constructor(name, walking, position, step = 1) {
    this.name = name;
    this.walking = walking;
    this.position = position;
    this.step = step;
  }
  move() {
    this.step++;
  }
  lose() {}
}

const White_A2 = new Chess("Pawn", [1, 2], "A2");
const White_B2 = new Chess("Pawn", [1, 2], "B2");
const White_C2 = new Chess("Pawn", [1, 2], "C2");
const White_D2 = new Chess("Pawn", [1, 2], "D2");
const White_E2 = new Chess("Pawn", [1, 2], "E2");
const White_F2 = new Chess("Pawn", [1, 2], "F2");
const White_G2 = new Chess("Pawn", [1, 2], "G2");
const White_H2 = new Chess("Pawn", [1, 2], "H2");
//--------------------------------------------------
const White_A1 = new Chess("Rook", [1, 2], "A1");
const White_B1 = new Chess("Knight", [1], "B1");
const White_C1 = new Chess("Bishop", [1], "C1");
const White_D1 = new Chess("King", [1], "D1");
const White_E1 = new Chess("Queen", [1], "E1");
const White_F1 = new Chess("Bishop", [1], "F1");
const White_G1 = new Chess("Knight", [1], "G1");
const White_H1 = new Chess("Rook", [1], "H1");
//-------------------------------------------------
const Black_A7 = new Chess("Pawn", [1, 2], "A8");
const Black_B7 = new Chess("Pawn", [1, 2], "B8");
const Black_C7 = new Chess("Pawn", [1, 2], "C8");
const Black_D7 = new Chess("Pawn", [1, 2], "D8");
const Black_E7 = new Chess("Pawn", [1, 2], "E8");
const Black_F7 = new Chess("Pawn", [1, 2], "F8");
const Black_G7 = new Chess("Pawn", [1, 2], "G8");
const Black_H7 = new Chess("Pawn", [1, 2], "H8");
//-----------------------------------------------------
const Black_A8 = new Chess("Rook", [1], "A7");
const Black_B8 = new Chess("Knight", [1], "B7");
const Black_C8 = new Chess("Bishop", [1], "C7");
const Black_D8 = new Chess("King", [1], "D7");
const Black_E8 = new Chess("Queen", [1], "E7");
const Black_F8 = new Chess("Bishop", [1], "F7");
const Black_G8 = new Chess("Knight", [1], "G7");
const Black_H8 = new Chess("Rook", [1], "H7");

var obj = {
  White_A1,
  White_B1,
  White_C1,
  White_D1,
  White_E1,
  White_F1,
  White_G1,
  White_H1,
  White_A2,
  White_B2,
  White_C2,
  White_D2,
  White_E2,
  White_F2,
  White_G2,
  White_H2,
  White_D1,
};

function pawnMove(e, name) {
  if (obj[name]) {
    e.style.transform = `translateY(-${obj[name].step * 90}px)`;
    obj[name].move();
  } else {
    console.error(`Chess piece ${name} not found.`);
  }
}

function movePiece(element, name) {
  if (obj[name]) {
    obj[name].move();
    element.style.transform = `translateY(-${obj[name].step * 90}px)`;
  } else {
    console.error(`Chess piece ${name} not found.`);
  }
}

const objBlack = {
  Black_A7,
  Black_B7,
  Black_C7,
  Black_D7,
  Black_E7,
  Black_F7,
  Black_G7,
  Black_H7,
  Black_A8,
  Black_B8,
  Black_C8,
  Black_D8,
  Black_E8,
  Black_F8,
  Black_G8,
  Black_H8,
};

function pawnMoveBlack(e, name) {
  if (objBlack[name]) {
    e.style.transform = `translateY(${objBlack[name].step * 90}px)`;
    objBlack[name].move();
  } else {
    console.error(`Chess piece ${name} not found.`);
  }
}
