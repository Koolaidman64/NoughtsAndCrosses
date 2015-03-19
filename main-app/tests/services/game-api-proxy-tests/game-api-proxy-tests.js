
(function(){
    'use strict';
    describe('Confirm gameApi calls are correct',function() {
        var $httpBackend;
        var gameAPI;

        beforeEach(function() {
            module('tombola.noughtsAndCrosses.gameAPI');
            module(function($provide){
                $provide.constant('gameApiProxyConstants', mocks.gameApiProxyConstants);
            });

            inject(function($injector) {
                $httpBackend = $injector.get('$httpBackend');
                gameAPI = $injector.get('gameAPI');
            });
        });

        it('startNewGame function returns OK', function() {
            var response = { outcome: 'Continue', gameboard: '010000000', winner: '0' };

            $httpBackend
                .expectPOST(mocks.gameApiProxyConstants.newGameUrl,
                    {'player1': 'random','player2': 'human' }
                 )

                .respond(response);

            gameAPI.startNewGame('random', 'human')
                .then(function(data){
                    expect(data).to.deep.equal(response);
                })
                .catch(function(){

                });
        });

        it('makeMove function returns OK', function() {
            var response = { outcome: 'Continue', gameboard: '011000000', winner: '0' };

            $httpBackend
                .expectPOST(mocks.gameApiProxyConstants.makeMoveUrl,
                {playerNumber:'1', chosenSquare:'2'}
            )

                .respond(response);

            gameAPI.makeMove('1', '2')
                .then(function(data){
                    expect(data).to.deep.equal(response);
                })
                .catch(function(){

                });
        });

        afterEach(function () {
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();

        });
    });
}());