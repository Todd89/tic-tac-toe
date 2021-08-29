class TicTacToe {

currectPlayer = 'x';

gameField = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

    constructor() {

    }

    getCurrentPlayerSymbol() {

        return this.currectPlayer;

    }

    nextTurn(rowIndex, columnIndex) {

        if (this.gameField [rowIndex][columnIndex] !== null) return;

        
        this.gameField [rowIndex][columnIndex] = this.currectPlayer;
        this.currectPlayer = this.currectPlayer === 'x' ? 'o' : 'x';

    }

    isFinished() {

       return !!this.getWinner () || this.noMoreTurns();

    }

    getWinner() {


            for (let i = 0; i < this.gameField.length; i++) {


            if (this.gameField[i].filter (v => v === 'x' ).length === 3) return 'x';
    
            if (this.gameField[i].filter (v => v === 'o' ).length === 3) return 'o';
    
            }

    
            for (let j = 0; j < this.gameField.length; j++) {
    
                let i = 0;
            
            if (this.gameField[i][j] === this.gameField[i + 1][j] && this.gameField[i][j] === this.gameField[i + 2][j] && this.gameField[i][j] === 'x' ) return 'x';
    
            if (this.gameField[i][j] === this.gameField[i + 1][j] && this.gameField[i][j] === this.gameField[i + 2][j] && this.gameField[i][j] === 'o' ) return 'o';
    
            }

            let i = 0;
            let j = 0;

    
            if (this.gameField[i][j] === this.gameField[i + 1][j + 1] && this.gameField[i][j] === this.gameField[i + 2][j + 2] && this.gameField[i][j] === 'x' ) return 'x';

            if (this.gameField[i][j] === this.gameField[i + 1][j + 1] && this.gameField[i][j] === this.gameField[i + 2][j + 2] && this.gameField[i][j] === 'o' ) return 'o';
    
            if (this.gameField[i][j + 2] === this.gameField[i + 1][j + 1] && this.gameField[i][j + 2] === this.gameField[i + 2][j] && this.gameField[i][j + 2] === 'x' ) return 'x';
    
            if (this.gameField[i][j + 2] === this.gameField[i + 1][j + 1] && this.gameField[i][j + 2] === this.gameField[i + 2][j] && this.gameField[i][j + 2] === 'o' ) return 'o';
            
            return null;


    }

    noMoreTurns() {

        let z = 0;

            for (let i = 0; i < this.gameField.length; i++) {

            if   (!this.gameField[i].includes (null)) z++;

            } 
            
            if (z == 3) return true;

            return false;
    
    }

    isDraw() {

        return this.noMoreTurns() && !this.getWinner()
    }

    getFieldValue(rowIndex, colIndex) {


        
        return  this.gameField [rowIndex][colIndex];

    }
}


module.exports = TicTacToe;
