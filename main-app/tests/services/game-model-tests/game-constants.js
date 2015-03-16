
(function(){
    describe('Confirm startup constants are correct',function() {
        var expect = chai.expect;
        var gameModelConstants;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameModelConstants');
            inject(function($injector) {
                gameModelConstants = $injector.get('gameModelConstants')
            });
        });

        it('Default game board is correctly set to 000000000',function() {
            expect(gameModelConstants.defaultGameBoard).to.equal('000000000');
        });

        it('Default player1 type is correctly set to human',function() {
            expect(gameModelConstants.defaultPlayerType1).to.equal('human');
        });

        it('Default player2 type is correctly set to human',function() {
            expect(gameModelConstants.defaultPlayerType2).to.equal('human');
        });

    });
}());