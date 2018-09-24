//Game class for handeling how the game is played

class Game {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.board = [];
    this.turnNum = 0;
    this.playerColors = ['red', 'blue'];
  }

  addMove(columnNum) {
    console.log(`shifting column ${columnNum} for player ${this.turnNum % 2}`);
    let it = columnNum + 35;
    if(this.board[it]) {
      console.log('Cannot Push Full Column');
      return;
    }
    else {
      while(it > 6) {
        this.board[it] = this.board[it-7];
        it = it - 7;
      }
      if(this.turnNum % 2) {
        this.board[it] = this.player0;
      } else {
        this.board[it] = this.player1;
      }
    }
    this.turnNum++;
  }

  makeBoard() {
    for (let i = 0; i < this.height; i++) {
      for(let j = 0; j < this.width; j++) {

      }
    }
  }

  getCell (row, col){
    if(row >= 0 && row < this.height && col >= 0 && col < this.width) {
      return this.board[row][col];
    }
  }

  setCell (val, row, col){
    if(row >= 0 && row < this.height && col >= 0 && col < this.width) {
      this.board[row][col] = val;
    }
  }

  hasWon(player) {

  }
}

function newGame() {
  console.log("starting a new game");
  return new Game();
}
