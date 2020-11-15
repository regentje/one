class Piece {
  constructor(color) {
    this.color = color;
  };
};

class Queen extends Piece {
  constructor(color) {
    super(color);
  };
};

class Knight extends Piece {
  constructor(color) {
    super(color);
  };
};
class Rook extends Piece {
  constructor(color) {
    super(color);
  };
};
class Bishop extends Piece {
  constructor(color) {
    super(color);
  };
};
class King extends Piece {
  constructor(color) {
    super(color);
  };
};
class Pawn extends Piece {
  constructor(color,) {
    super(color);
  };
};
let queenBlack = new Queen('Black');
let pawnBlack = new Pawn('Black');
let bishopBlack = new Bishop('Black');
let knightBlack = new Knight('Black');
let rookBlack = new Rook('Black');
let kingBlack = new King('Black');
const queenWhite = new Queen('White');
const pawnWhite = new Pawn('White');
const bishopWhite = new Bishop('White');
const knightWhite = new Knight('White');
const rookWhite = new Rook('White');
const kingWhite = new King('White');


class Game {
  constructor() {
  }
  status = 'ready';
  start() {
    this.status = 'progress'
    this.board = [
      [bishopBlack, knightBlack, rookBlack, queenBlack, kingBlack, rookBlack, knightBlack, bishopBlack],
      [pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack, pawnBlack],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite, pawnWhite],
      [bishopWhite, knightWhite, rookWhite, queenWhite, kingWhite, rookWhite, knightWhite, bishopWhite],
    ];
  }
  move([a, b], [x, y]) {
    if (this.status !== 'progress') {
      throw `You can't make moves when game is in '${this.status}' status`;
    } else {
      this.board[x][y] = this.board[a][b];
      this.board[a][b] = null;
    }
  }
  win(colorWin) {
    if (colorWin !== 'Black') {
      throw `You chose the wrong color '${colorWin}'`;
    } else {
      this.status = 'Black won';
    }
  }
}
const game = new Game();

game.start();

game.move([6, 4], [4, 4]);
game.move([1, 3], [3, 4]);
game.move([7, 5], [4, 2]);
game.move([0, 1], [2, 2]);
game.move([7, 3], [3, 7]);
game.move([0, 6], [2, 5]);
game.move([2, 2], [1, 5]);

game.win('Black');


