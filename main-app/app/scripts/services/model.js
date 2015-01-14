
angular.module('noughtsAndCrossesApp')
    .factory ('gameModel', function(){

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'human';
        this.currentPlayer = '1';

        var changePlayerType = function(player1){
            if(player1 === 'human'){
                return 'random';
            }
            if(player1 === 'random'){
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

    return this;
});