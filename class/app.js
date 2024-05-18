class Chess {
  constructor(name, walking, position, step) {
    this.name = name;
    this.walking = walking;
    this.position = position;
    this.step = step;
  }
  move() {}
  lose() {}
}

const White_A2 = new Chess("Pawn", [1, 2], "A2", 1);
const White_B2 = new Chess("Pawn", [1, 2], "B2", 1);
const White_C2 = new Chess("Pawn", [1, 2], "C2");
const White_D2 = new Chess("Pawn", [1, 2], "D2");
const White_E2 = new Chess("Pawn", [1, 2], "E2");
const White_F2 = new Chess("Pawn", [1, 2], "F2");
const White_G2 = new Chess("Pawn", [1, 2], "G2");
const White_H2 = new Chess("Pawn", [1, 2], "H2");
//--------------------------------------------------
const White_A1 = new Chess("Rook", [1], "A1");
const White_B1 = new Chess("Knight", [1], "B1");
const White_C1 = new Chess("Bishop", [1], "C1");
const White_D1 = new Chess("King", [1], "D1");
const White_E1 = new Chess("Queen", [1], "E1");
const White_F1 = new Chess("Bishop", [1], "F1");
const White_G1 = new Chess("Knight", [1], "G1");
const White_H1 = new Chess("Rook", [1], "H1");
//-------------------------------------------------
const Black_A2 = new Chess("Pawn", [1, 2], "A8");
const Black_B2 = new Chess("Pawn", [1, 2], "B8");
const Black_C2 = new Chess("Pawn", [1, 2], "C8");
const Black_D2 = new Chess("Pawn", [1, 2], "D8");
const Black_E2 = new Chess("Pawn", [1, 2], "E8");
const Black_F2 = new Chess("Pawn", [1, 2], "F8");
const Black_G2 = new Chess("Pawn", [1, 2], "G8");
const Black_H2 = new Chess("Pawn", [1, 2], "H8");
//-----------------------------------------------------
const Black_A1 = new Chess("Rook", [1], "A7");
const Black_B1 = new Chess("Knight", [1], "B7");
const Black_C1 = new Chess("Bishop", [1], "C7");
const Black_D1 = new Chess("King", [1], "D7");
const Black_E1 = new Chess("Queen", [1], "E7");
const Black_F1 = new Chess("Bishop", [1], "F7");
const Black_G1 = new Chess("Knight", [1], "G7");
const Black_H1 = new Chess("Rook", [1], "H7");

var obj = { White_A2 };
function pawnA2Run(e, name) {
  e.style.transform = `translateY(-${obj[name].step * 90}px)`;
  obj[name] = { ...obj[name], step: obj[name].step + 1 };
}
// var obj = { White_B2 };
// function pawnB2Run(e, name) {
//   e.style.transform = `translateY(-${obj[name].step * 90}px)`;
//   obj[name] = { ...obj[name], step: obj[name].step + 1 };
// }
