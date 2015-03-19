
(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.gameModelConstants')
        .constant('gameModelConstants', {

            defaultGameBoard: '000000000',
            defaultPlayerType1: 'human',
            defaultPlayerType2: 'human',
            defaultWinner: '0',
            defaultCurrentPlayer: '1'
        });
})();