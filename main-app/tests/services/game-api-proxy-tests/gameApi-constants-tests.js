
(function(){
    describe('GameAPI constants tests',function() {
        var constants;
        var expect = chai.expect;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameAPI');
            inject(function($injector) {
                constants = $injector.get('gameApiProxyConstants');
            });
        });

        it('NewGame url has not been changed', function() {
            expect(constants.newGame).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/newgame');
        });

        it('MakeMove url has not been changed', function() {
            expect(constants.makeMove).to.equal('http://EUTAVEG-01.tombola.emea:35000/api/v1.0/makemove');
        });

    })

}());