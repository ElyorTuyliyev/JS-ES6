class Chess {
  constructor(name, walking, position) {
    this.name = name;
    this.walking = walking;
    this.position = position;
  }
  move() {}
  lose() {}
}

class WhiteA2 extends Chess {}
class WhiteB2 extends Chess {}
class WhiteC2 extends Chess {}
class WhiteD2 extends Chess {}
class WhiteE2 extends Chess {}
class WhiteF2 extends Chess {}
class WhiteG2 extends Chess {}
class WhiteH2 extends Chess {}
//-----------------------------
class WhiteA1 extends Chess {}
class WhiteB1 extends Chess {}
class WhiteC1 extends Chess {}
class WhiteD1 extends Chess {}
class WhiteE1 extends Chess {}
class WhiteF1 extends Chess {}
class WhiteG1 extends Chess {}
class WhiteH1 extends Chess {}

class BlackA2 extends Chess {}
class BlackB2 extends Chess {}
class BlackC2 extends Chess {}
class BlackD2 extends Chess {}
class BlackE2 extends Chess {}
class BlackF2 extends Chess {}
class BlackG2 extends Chess {}
class BlackH2 extends Chess {}
//-----------------------------
class BlackA1 extends Chess {}
class BlackB1 extends Chess {}
class BlackC1 extends Chess {}
class BlackD1 extends Chess {}
class BlackE1 extends Chess {}
class BlackF1 extends Chess {}
class BlackG1 extends Chess {}
class BlackH1 extends Chess {}

const White_A2 = new WhiteA2("Pawn", [1, 2], "B2");
const White_B2 = new WhiteB2("Pawn", [1, 2], "A2");
const White_C2 = new WhiteC2("Pawn", [1, 2], "C2");
const White_D2 = new WhiteD2("Pawn", [1, 2], "D2");
const White_E2 = new WhiteE2("Pawn", [1, 2], "E2");
const White_F2 = new WhiteF2("Pawn", [1, 2], "F2");
const White_G2 = new WhiteG2("Pawn", [1, 2], "G2");
const White_H2 = new WhiteH2("Pawn", [1, 2], "H2");
//--------------------------------------------------
const White_A1 = new WhiteA1("Rook", [1], "A1");
const White_B1 = new WhiteB1("Knight", [1], "B1");
const White_C1 = new WhiteC1("Bishop", [1], "C1");
const White_D1 = new WhiteD1("King", [1], "D1");
const White_E1 = new WhiteE1("Queen", [1], "E1");
const White_F1 = new WhiteF1("Bishop", [1], "F1");
const White_G1 = new WhiteG1("Knight", [1], "G1");
const White_H1 = new WhiteH1("Rook", [1], "H1");
//-------------------------------------------------
const Black_A2 = new BlackA2("Pawn", [1, 2], "A8");
const Black_B2 = new BlackB2("Pawn", [1, 2], "B8");
const Black_C2 = new BlackC2("Pawn", [1, 2], "C8");
const Black_D2 = new BlackD2("Pawn", [1, 2], "D8");
const Black_E2 = new BlackE2("Pawn", [1, 2], "E8");
const Black_F2 = new BlackF2("Pawn", [1, 2], "F8");
const Black_G2 = new BlackG2("Pawn", [1, 2], "G8");
const Black_H2 = new BlackH2("Pawn", [1, 2], "H8");
//-----------------------------------------------------
const Black_A1 = new BlackA1("Rook", [1], "A7");
const Black_B1 = new BlackB1("Knight", [1], "B7");
const Black_C1 = new BlackC1("Bishop", [1], "C7");
const Black_D1 = new BlackD1("King", [1], "D7");
const Black_E1 = new BlackE1("Queen", [1], "E7");
const Black_F1 = new BlackF1("Bishop", [1], "F7");
const Black_G1 = new BlackG1("Knight", [1], "G7");
const Black_H1 = new BlackH1("Rook", [1], "H7");

function pawnA1Run(e) {}
