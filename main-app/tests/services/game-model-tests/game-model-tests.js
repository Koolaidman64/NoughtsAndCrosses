
(function(){
    'use strict';
    describe('Game model tests',function() {
        var gameModel;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameModel');
            module('tombola.noughtsAndCrosses.gameModelConstants');

            inject(function($injector) {
                gameModel = $injector.get('gameModel');
            });
        });

        it('Human vs Human',function() {
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(2);
        });

        it('Human vs Random',function() {
            gameModel.changePlayerType2();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Human vs PreTrained',function() {
            gameModel.changePlayerType2();
            gameModel.changePlayerType2();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Random vs Random',function() {
            gameModel.changePlayerType1();
            gameModel.changePlayerType2();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Random vs Human',function() {
            gameModel.changePlayerType1();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('Random vs PreTrained',function() {
            gameModel.changePlayerType2();
            gameModel.changePlayerType1();
            gameModel.changePlayerType1();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('PreTrained vs Human',function() {
            gameModel.changePlayerType1();
            gameModel.changePlayerType1();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('PreTrained vs Random',function() {
            gameModel.changePlayerType1();
            gameModel.changePlayerType1();
            gameModel.changePlayerType2();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });

        it('PreTrained vs PreTrained',function() {
            gameModel.changePlayerType1();
            gameModel.changePlayerType1();
            gameModel.changePlayerType2();
            gameModel.changePlayerType2();
            gameModel.changePlayerNumber();

            expect(gameModel.currentPlayer).to.equal(1);
        });
    });
})();