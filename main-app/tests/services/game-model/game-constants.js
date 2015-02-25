
(function(){
    describe('Confirm startup constants are correct',function() {
        var expect = chai.expect;
        var gameConstants;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.constants');
            inject(function($injector) {
                gameConstants = $injector.get('gameConstants')
            });
        });

        it('Default game board is correctly set to 000000000',function() {
            expect(gameConstants.defaultGameBoard).to.equal('000000000');
        });

        it('Default player1 type is correctly set to human',function() {
            expect(gameConstants.defaultPlayerType1).to.equal('human');
        });

        it('Default player2 type is correctly set to human',function() {
            expect(gameConstants.defaultPlayerType2).to.equal('human');
        });

    });
}());