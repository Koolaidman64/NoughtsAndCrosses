
(function(){
    describe('Confirm gameApi calls are correct',function() {
        var $httpBackend;
        var gameAPI;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameAPI');
            module(function($provide) {
                $provide.constant('gameApiProxyConstants', mocks.gameApiConstantMocks);
            });

            inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');
                gameAPI = $injector.get('gameAPI');
            });
        });



    });
}());