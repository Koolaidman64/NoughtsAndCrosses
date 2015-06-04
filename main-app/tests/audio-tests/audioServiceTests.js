
(function() {
    'use strict';
    describe('AudioService Tests', function() {
        var audioService;
        var audioSprite;

        beforeEach(function () {
            module('tombola.noughtsAndCrosses.audio');
            module(function($provide) {
                $provide.service('audioSprite',mocks.audioSprite);
            });
        });

        inject(function ($injector) {
            audioService = $injector.get('audioService');
            audioSprite = $injector.get('audioSprite');

        });

        it('startNewGameAudio test', function () {
            audioService.startNewGameAudio();
            expect(audioSprite.playAudio).to.equal(0, 4.5);
        });

    });
})();