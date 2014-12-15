
angular.module('noughtsAndCrossesApp')
    .service ('gameModel', function(){

    var gameModel = function() {

        this.outcome = 'continue';
        this.gameboard = '000000000';
        this.winner = 0;
        this.player1 = 'human';
        this.player2 = 'random';
    };

    return new gameModel();

});