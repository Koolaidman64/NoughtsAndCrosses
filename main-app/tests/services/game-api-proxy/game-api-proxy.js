
(function(){
    describe('Confirm API calls are correct',function() {
        var expect = chai.expect;
        var gameAPI;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameAPI');
            inject(function($injector) {
                gameAPI = $injector.get('gameAPI')
            });
        });

    });
}());
