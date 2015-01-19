
angular.module('noughtsAndCrossesApp')
    .factory ('gameModel', function(){

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'human';
        this.currentPlayer = 1;

        var player1TypeChange = function(player1){
            if(player1 === 'human'){
                return 'random';
            }
            if(player1 === 'random'){
                return 'pre-trained';
            }
            return 'human';
        };

        var player2TypeChange = function(player2){
            if(player2 === 'human'){
                return 'random';
            }
            if(player2 === 'random'){
                return 'pre-trained';
            }
            return 'human';
        };

        var changePlayerNumber = function() {
            var me = this;
            if (me.player1 !== 'human') {
                return;
            }
            if (me.player2 !== 'human') {
                return;
            }

            me.currentPlayer = 1;

        };

        this.changePlayerType1 = function(){
            this.player1 = player1TypeChange(this.player1);
        };

        this.changePlayerType2 = function(){
            this.player2 = player2TypeChange(this.player2);
        };

        this.switchPlayer = function(){
            var me = this;
            me.currentPlayer = changePlayerNumber();
        };

    return this;
});