
(function(){
    describe('Confirm gameApi calls are correct',function() {
        var expect = chai.expect;
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

            it('Call returns data when response is OK', function() {
                $httpBackend
                    .expectPOST(mocks.gameApiConstantMocks.makeMove)
                    .respond({data:'foo data'});

//                mocks.gameApiProxyMocks.makeMove()
//                    .then(function(results){
//                        expect(results).to.equal({ data:'foo data'});
//                    })
//                    .catch(function(errorData){
//                        expect(errorData).to.not.ok();
//                    });
//                $httpBackend.flush();
            });
    });
}());