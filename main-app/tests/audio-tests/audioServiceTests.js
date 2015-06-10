
(function() {
    'use strict';
    describe('AudioService Tests', function() {
        var audioService;

        beforeEach(function () {
            module('tombola.noughtsAndCrosses.audio');
            module(function($provide) {
                $provide.value('audioService',mocks.audioService);
            });

            inject(function(_audioService_){
                audioService = _audioService_;
            })
        });

        it('startNewGameAudio test', function () {
            mocks.audioService.startNewGameAudio();
        });

    });
})();