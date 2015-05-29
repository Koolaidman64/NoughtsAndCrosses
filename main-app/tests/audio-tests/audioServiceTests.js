
(function(){
    'use strict';
    describe('AudioService Tests', function() {

        var audioService;
        var audioSprite;

        beforeEach(function () {
            module('tombola.noughtsAndCrosses.audioService');
            module('tombola.noughtsAndCrosses.audioSprite');
        });

        inject(function ($injector) {
            audioService = $injector.get('audioService');
            audioSprite = $injector.get('audioSprite');

        });

        it('startNewGameAudio test', function () {

        });
    });
})();