
angular.module('noughtsAndCrossesApp')
    .service ('gameModel', function(){

    var gameModel = function() {

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'human';
        this.currentPlayer = '1';
    };

    var changePlayerType = function(currentPlayer){
        if(currentPlayer === 'human'){

            return 'random';
        }
        if(currentPlayer === 'random'){

            return 'pre-trained';
        }
        return 'human';
    };

    this.changePlayer1 = function(){
        this.player1 = changePlayerType(this.player1);
    };

    this.changePlayer2 = function(){
        this.player2 = changePlayerType(this.player2);
    };

    return new gameModel();

});