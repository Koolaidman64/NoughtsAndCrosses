
(function() {
    'use strict';
    describe('AudioService Tests', function() {
        var sandbox;
        var audioService;
        var audioSprite;
        var audioSpriteMock;

        beforeEach(function () {
            module('tombola.noughtsAndCrosses.audio');
            module(function($provide){
                $provide.value('audioSprite', mocks.audioSprite);
            });
            inject(function($injector){

                sandbox = sinon.sandbox.create();
                audioSpriteMock = sinon.sandbox.mock(mocks.audioSprite);
                audioService = $injector.get('audioService');

            });
        });

        it('startNewGameAudio test', function () {

            audioSpriteMock
                .expects('playAudio')
                .withArgs(0, 4.5)
                .once();

            audioService.startNewGameAudio();
        });

        afterEach(function () {
            audioSpriteMock.verify();
            sandbox.restore();
        });
    });
})();