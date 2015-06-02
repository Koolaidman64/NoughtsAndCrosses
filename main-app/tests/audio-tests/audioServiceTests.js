
(function(){
    'use strict';
    describe('AudioService Tests', function() {

        var audioService;
        var audioSprite;

        beforeEach(function () {
            module('tombola.noughtsAndCrosses.audioService');
            module('tombola.noughtsAndCrosses.audioSprite');
            module(function($provide) {
                $provide.service('audio',mocks.audio);
            });
        });

        inject(function ($injector) {
            audioService = $injector.get('audioService');
            audioSprite = $injector.get('audioSprite');

        });

        it('startNewGameAudio test', function () {
//            mocks.audioService.startNewGameAudio();
//            expect(mocks.audio.playAudio).to.equal(0, 4.5);
        });

    });
})();