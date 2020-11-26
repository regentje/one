class Piece {
  constructor(color) {
    this.color = color;
  };
  getMovePiece() {
    let availableMoves;
    if (this.color !== game.player) {
      throw ` I can't move! `;
    }
    availableMoves = ['x', 'y'];
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
  constructor(color) {
    super(color);
  };
  changePawn(exchangePiece) {
    if (exchangePiece instanceof King) {
      throw `You can't exchange a pawn for a king `;
    };
    board.board[game.selectedPieceX][game.selectedPieceY] = exchangePiece;
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
    this.status = 'ready';
    this.player;
    this.selectedPieceX = null;
    this.selectedPieceY = null;
    this.killed = [];
    this.count = 0;
    this.history = [];
  };
  start() {
    this.status = 'progress';
    this.player = 'White';
  };
  select(x, y) {
    if (board.board[x][y].color !== this.player) {
      throw `You can't make choose this piece `;
    };
    this.selectedPieceX = x;
    this.selectedPieceY = y;
  };
  changePawn(exchangePiece) {
    if (this.selectedPieceX === 0 && board.board[this.selectedPieceX][this.selectedPieceY] === pawnWhite) {
      pawnWhite.changePawn(exchangePiece);
    } else if (this.selectedPieceX === 7 && board.board[this.selectedPieceX][this.selectedPieceY] === pawnBlack) {
      pawnBlack.changePawn(exchangePiece);
    };
  };
  unselect() {
    const x = this.selectedPieceX;
    const y = this.selectedPieceY;
    if (this.board[x][y].color !== this.player) {
      throw `You can't make unselect this piece `;
    };
    this.selectedPieceX = null;
    this.selectedPieceY = null;
  };
  win(colorWin) {
    if (colorWin !== 'Black' && colorWin !== 'White') {
      throw `You choose the wrong color '${colorWin}'`;
    };
    this.status = `${colorWin} won`;
  };
  move([toX, toY]) {
    if (this.selectedPieceX === null && this.selectedPieceY === null) {
      throw `Piece unselect`;
    };
    board.move([toX, toY]);
    this.count += 1;
    this.history.push([this.selectedPieceX, this.selectedPieceY, toX, toY]);
    if (this.player === 'White') {
      this.player = 'Black';
    } else {
      this.player = 'White';
    };
  };
  getMove() {
    board.board[this.selectedPieceX][this.selectedPieceY].getMovePiece();
  }
};
class Board {
  constructor() {
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
  };
  move([toX, toY]) {
    if (game.status !== 'progress') {
      throw `You can't make moves when game is in '${game.status}' status`;
    };
    let select = this.board[game.selectedPieceX][game.selectedPieceY];
    let goal = this.board[toX][toY];
    if (goal !== null && goal.color === select.color) {
      throw `You can't kill your piece`;
    } else if (goal === null) {
      this.board[toX][toY] = select;
      this.board[game.selectedPieceX][game.selectedPieceY] = null;
    } else if (goal.color !== select.color) {
      game.killed.push(goal);
      this.board[toX][toY] = select;
      this.board[game.selectedPieceX][game.selectedPieceY] = null;
    };
  };
};

const board = new Board();
const game = new Game();

game.start();
game.select(6, 4);
game.move([4, 4]);
game.select(1, 3);
game.move([3, 4]);
game.select(7, 5);
game.move([4, 2]);
game.select(0, 1);
game.move([2, 2]);
game.select(7, 3);
game.move([3, 7]);
game.select(0, 6);
game.move([2, 5]);
game.select(6, 1);
game.move([0, 1]);
game.select(1, 0);
game.move([2, 0]);
game.select(6, 0);
game.move([0, 0]);
game.select(2, 0);
game.getMove();

game.win('Black');
