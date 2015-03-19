
(function(){
    'use strict';
    describe('GameAPI constants tests',function() {
        var expect = chai.expect;
        var gameApiConstants;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameAPI');
            inject(function($injector) {
                gameApiConstants = $injector.get('gameApiProxyConstants');
            });
        });

        it('NewGame url has not been changed', function() {
            expect(gameApiConstants.newGameUrl).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame');
        });

        it('MakeMove url has not been changed', function() {
            expect(gameApiConstants.makeMoveUrl).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove');
        });

    })

}());