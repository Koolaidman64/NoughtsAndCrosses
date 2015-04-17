
(function() {
    'use strict';
    angular.module('tombola.noughtsAndCrosses.gameModel')
        .factory('gameModel', function (gameModelConstants) {

            this.outcome = 'continue';
            this.gameboard = gameModelConstants.defaultGameBoard;
            this.winner = 0;
            this.player1 = gameModelConstants.defaultPlayerType1;
            this.player2 = gameModelConstants.defaultPlayerType2;
            this.currentPlayer = 1;

            var player1TypeChange = function (player1) {
                if (player1 === 'human') {
                    return 'random';
                }
                if (player1 === 'random') {
                    return 'pre-trained';
                }
                return 'human';
            };

            var player2TypeChange = function (player2) {
                if (player2 === 'human') {
                    return 'random';
                }
                if (player2 === 'random') {
                    return 'pre-trained';
                }
                return 'human';
            };

            this.changePlayerNumber = function () {
                var me = this;

                if (me.player1 !== 'human') {
                    return;
                }
                if (me.player2 !== 'human') {
                    return;
                }
                if (me.currentPlayer === 1) {
                    me.currentPlayer = 2;
                }
                else {
                    me.currentPlayer = 1;
                }
            };

            this.firstPlayer = function () {
                var me = this;

                if (me.player1 === 'human') {
                    me.currentPlayer = 1;
                }
                else if (me.player2 === 'human') {
                    me.currentPlayer = 2;
                }
            };

            this.changePlayerType1 = function () {
                this.player1 = player1TypeChange(this.player1);
            };

            this.changePlayerType2 = function () {
                this.player2 = player2TypeChange(this.player2);
            };

            this.isDrawn = function () {
                return this.outcome === 'Draw';
            };

            this.is1Won = function () {
                return this.winner === '1';
            };

            this.is2Won = function () {
                return this.winner === '2';
            };

            this.updateModel = function (data) {
                this.gameboard = data.gameboard;
                this.outcome = data.outcome;
                this.winner = data.winner;
            };

            return this;
        });
})();
