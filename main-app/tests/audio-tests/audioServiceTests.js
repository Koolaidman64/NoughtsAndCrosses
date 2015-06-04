
(function() {
    'use strict';
    describe('AudioService Tests', function() {
        var audioService;
        var audioSprite;

        beforeEach(function () {
            module('tombola.noughtsAndCrosses.audio');
            module(function($provide) {
                $provide.value('audioSprite',mocks.audioSprite);
            });

            inject(function(_audioService_){
                audioService = _audioService_;
            })
        });

        it('startNewGameAudio test', function () {

        });

    });
})();